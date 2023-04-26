import './App.css';
import { useState } from 'react';
//
import topic_1_component from './1_component/index.tsx';
import topic_2_jsx from './2_jsx/index.tsx';
import topic_3_conditional_rendering from './3_conditional_rendering/index.tsx';

const topics = {
  '1_component': topic_1_component,
  '2_jsx': topic_2_jsx,
  '3_conditional_rendering': topic_3_conditional_rendering,
};

function App() {
  const [currentTopic, setCurrentTopic] = useState('1_component');
  const SelectedTopicComponent = topics[currentTopic as keyof typeof topics];

  return (
    <div>
      <select value={currentTopic} onChange={(e) => setCurrentTopic(e.target.value)}>
        {Object.keys(topics).map((topic) => (
          <option key={topic} value={topic}>
            {topic}
          </option>
        ))}
      </select>
      <SelectedTopicComponent />
    </div>
  );
}

export default App;
