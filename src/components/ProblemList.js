const ProblemList = ({problems}) => {
    return (
      <ul>
          {problems.map(problem => <li>{problem.msg}<br/>--&gt; Path: {problem.path}</li>)}
      </ul>
    );
}

export default ProblemList;