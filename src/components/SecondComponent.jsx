const SecondComponent = (props) => <>
  <h1>Hi</h1>
  <h2>Hi2</h2>
  <h3>Hi3</h3>
  <h4>{props.nameOfComponent}</h4>
  <h5>{props.children}</h5>
</>;

export default SecondComponent;
