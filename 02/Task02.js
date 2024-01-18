import React from 'react';
import Welcome from './../src/components/Welcome';
import withPopup from './../src/hoc/withPopup';

const ComponentWithPopup = withPopup('dark')(Welcome);

const Task02 = () => (
  <section>
    <h2>Task 02</h2>
    <ComponentWithPopup />
  </section>
);

export default Task02;
