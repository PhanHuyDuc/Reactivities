import { makeAutoObservable, runInAction } from 'mobx';
import { User, UserFormValues } from '../models/users';
import agent from '../api/agent';
import { store } from './store';
import { router } from '../router/Routes';

export default class UserStore {
  user: User | null | undefined = null;

  constructor() {
    makeAutoObservable(this);
  }
  get isLogedIn() {
    return !!this.user;
  }

  login = async (creds: UserFormValues) => {
    const user = await agent.Account.login(creds);
    store.commonStore.setToken(user.token);
    runInAction(() => (this.user = user));
    router.navigate('/activities');
  };
  logout = () => {
    store.commonStore.setToken('jwt');
    this.user = null;
    router.navigate('/');
  };
  getUser = async () => {
    try {
      const user = await agent.Account.current();
      runInAction(() => (this.user = user));
    } catch (error) {
      console.log(error);
    }
  };
}
