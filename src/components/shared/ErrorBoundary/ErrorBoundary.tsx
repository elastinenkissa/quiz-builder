import { FC } from 'react';

const ErrorBoundary: FC = () => {
  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <h1>Not found</h1>
    </div>
  );
};

export default ErrorBoundary;
