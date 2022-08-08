import "./App.css";

const Part = (props) => {
  return (
    <div>
      <p>
        Name: {props.name}. Excercises in this part: {props.ejercicios}
      </p>
    </div>
  );
};

const Header = (props) => {
  return (
    <div>
      <p>Course name: {props.course}</p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part name={props.parts1} ejercicios={props.exercises1} />
      <Part name={props.parts2} ejercicios={props.exercises2} />
      <Part name={props.parts3} ejercicios={props.exercises3} />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>
        Total exercises:{" "}
        {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <h1>
        <Header course={course} />
      </h1>
      <Content
        parts1={parts[0].name}
        parts2={parts[1].name}
        parts3={parts[2].name}
        exercises1={parts[0].exercises}
        exercises2={parts[1].exercises}
        exercises3={parts[2].exercises}
      />
      <Total
        exercises1={parts[0].exercises}
        exercises2={parts[1].exercises}
        exercises3={parts[2].exercises}
      />
    </div>
  );
};

export default App;
