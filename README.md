# assignment
# Step 1 : create project floder
# Step 2 : npm init --yes
# Step 3 : npm install react react-dom 
# Step 4 : npm install --save-dev @babel/preset-react @babel/preset-env @babel/core babel-loader @babel/plugin-proposal-class-properties
# Step 5 : npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin path
# Step 6 : Create floder src and public under project floder
# Step 7 : Create webpack.config.js file under project floder
# Step 8 : npm install style-loader css-loader file-loader  
# Step 9 : Create file index.html under public floder
# Step 10 : Create file App.css, App.js,index.js under src floder
# Step 11 : npm start
Create Storybook 
# Step 1 : npm install @storybook/react --save-dev
# Step 2 : "scripts": {
  "storybook": "start-storybook"
}
# Step 3 : Create floder .storybook under project floder
# Step 4 : create file config.js under .storybook floder
# Step 5 : code snippet
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../Button/button';

// export default { title: 'Button' };


const SomeCustomComponent = () => <div>I am Custom Component</div>
const MyComponent = ()=> <span><div>Sample Component</div><br/><Button>submit</Button></span>
storiesOf('Button', module)
    .add('Disable Button', () => <Button disabled={true} />)
    .add('Enable Button', () => <Button disabled={false} />)

# Step 6: npm run storybook
