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
      <Part name={props.part1} ejercicios={props.exercises1} />
      <Part name={props.part2} ejercicios={props.exercises2} />
      <Part name={props.part3} ejercicios={props.exercises3} />
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
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <h1>
        <Header course={course} />
      </h1>
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};

export default App;
