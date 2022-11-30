const ErrorList = ({errors}) => {
    return (
      <ul>
        {errors.map(error => <li>{error.msg}<br/>--&gt; Path: {error.path}</li>)}
      </ul>
    );
}

export default ErrorList;