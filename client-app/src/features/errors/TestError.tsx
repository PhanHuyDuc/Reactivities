import axios from 'axios';
import Button from '../../ui/Button';
import { useState } from 'react';
import ValidationError from './ValidationError';

export default function TestErrors() {
  const baseUrl = 'http://localhost:5000/api/';
  const [errors, setErrors] = useState(null);

  function handleNotFound() {
    axios
      .get(baseUrl + 'buggy/not-found')
      .catch((err) => console.log(err.response));
  }

  function handleBadRequest() {
    axios
      .get(baseUrl + 'buggy/bad-request')
      .catch((err) => console.log(err.response));
  }

  function handleServerError() {
    axios
      .get(baseUrl + 'buggy/server-error')
      .catch((err) => console.log(err.response));
  }

  function handleUnauthorised() {
    axios
      .get(baseUrl + 'buggy/unauthorised')
      .catch((err) => console.log(err.response));
  }

  function handleBadGuid() {
    axios
      .get(baseUrl + 'activities/notaguid')
      .catch((err) => console.log(err.response));
  }

  function handleValidationError() {
    axios.post(baseUrl + 'activities', {}).catch((err) => setErrors(err));
  }

  return (
    <>
      <div className="min-h-dvh space-y-3 py-5">
        <div className="py-5">
          <h1 className="text-4xl font-bold">Test Error component</h1>
        </div>
        <div className="flex flex-wrap items-center justify-between space-y-3 bg-white px-5 py-4 text-center">
          <Button onClick={handleNotFound} type="error">
            Not Found
          </Button>
          <Button onClick={handleBadRequest} type="error">
            Bad Request
          </Button>
          <Button onClick={handleValidationError} type="error">
            Validation Error
          </Button>
          <Button onClick={handleServerError} type="error">
            Server Error
          </Button>
          <Button onClick={handleUnauthorised} type="error">
            Unauthorised
          </Button>
          <Button onClick={handleBadGuid} type="error">
            Bad Guid
          </Button>
        </div>
        <div className=""> {errors && <ValidationError errors={errors} />}</div>
      </div>
    </>
  );
}
