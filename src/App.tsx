import './App.css';
import { useState } from 'react';
//
import topic_1_component from './1_component/index.tsx';
import topic_2_jsx from './2_jsx/index.tsx';
import topic_3_conditional_rendering from './3_conditional_rendering/index.tsx';
import topic_4_rendering_list from './4_rendering_list/index.tsx';
import topic_5_events_and_screen_updation from './5_events_and_screen_updation/index.tsx';
import topic_6_sharing_data_between_component from './6_sharing_data_between_component/index.tsx';

const topics = {
  '1_component': topic_1_component,
  '2_jsx': topic_2_jsx,
  '3_conditional_rendering': topic_3_conditional_rendering,
  '4_rendering_list': topic_4_rendering_list,
  '5_events_and_screen_updation': topic_5_events_and_screen_updation,
  '6_sharing_data_between_component': topic_6_sharing_data_between_component,
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
      <hr />
      <SelectedTopicComponent />
    </div>
  );
}

export default App;
