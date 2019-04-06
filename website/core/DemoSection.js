const React = require('react');
const {
  TerminalFrame,
  TitleBar,
  ButtonGroup,
  ButtonSpacer,
  Button,
  CloseIcon,
  MinimizeIcon,
  MaximizeIcon,
  Heading,
  TerminalBody,
  Text,
  Cursor
} = require('terminal-veeloy/common');

class DemoSection extends React.Component {
  render() {
    return (
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
        <TerminalFrame darkMode style={{ width: '680px', height: '440px'}}>
          <TitleBar darkMode>
            <ButtonGroup>
              <ButtonSpacer />
              <Button close darkMode>
                <CloseIcon />
              </Button>
              <ButtonSpacer />
              <Button minimize darkMode>
                <MinimizeIcon />
              </Button>
              <ButtonSpacer />
              <Button maximize darkMode>
                <MaximizeIcon />
              </Button>
              <ButtonSpacer />
            </ButtonGroup>
            <Heading darkMode>Scaffold Kit</Heading>
          </TitleBar>
          <TerminalBody style={{ 'backgroundColor': 'black', 'color': 'white', fontSize: '14px', textOverflow: 'clip', whiteSpace: 'nowrap' }}>
            <Text>
              <Text bold>$ </Text>
              <Text>gen-my-server app --server=koa --orm=mongoose</Text>
            </Text>
            <br />
            <Text>
              <Text greenBright>      create </Text>
              <Text>.eslintrc.json</Text>
            </Text>
            <br />
            <Text>
              <Text greenBright>      create </Text>
              <Text>.gitignore</Text>
            </Text>
            <br />
            <Text>
              <Text greenBright>      create </Text>
              <Text>README.md</Text>
            </Text>
            <br />
            <Text>
              <Text greenBright>      create </Text>
              <Text>package.json</Text>
            </Text>
            <br />
            <Text>
              <Text greenBright>      create </Text>
              <Text>routes.js</Text>
            </Text>
            <br />
            <Text>
              <Text greenBright>      create </Text>
              <Text>server.js</Text>
            </Text>
            <br />
            <Text>
              <Text greenBright>     install </Text>
              <Text>eslint</Text>
            </Text>
            <br />
            <Text>
              <Text greenBright>     install </Text>
              <Text>koa</Text>
            </Text>
            <br />
            <Text>
              <Text greenBright>     install </Text>
              <Text>koa-router</Text>
            </Text>
            <br />
            <Text>
              <Text bold>$ </Text>
              <Text>gen-my-server model User email:String name:String age:Int</Text>
            </Text>
            <br />
            <Text>
              <Text greenBright>      create </Text>
              <Text>models/User.js</Text>
            </Text>
            <br />
            <Text>
              <Text greenBright>      update </Text>
              <Text>server.js</Text>
            </Text>
            <br />
            <Text>
              <Text bold>$ </Text>
              <Text>gen-my-server api users --CRUD</Text>
            </Text>
            <br />
            <Text>
              <Text greenBright>      create </Text>
              <Text>controllers/users.js</Text>
            </Text>
            <br />
            <Text>
              <Text greenBright>      update </Text>
              <Text>routes.js</Text>
            </Text>
            <br />
            <Text>
              <Text greenBright>      update </Text>
              <Text>server.js</Text>
            </Text>
            <br />
            <Text>
              <Text bold>$ </Text>
              <Text>npm start</Text>
            </Text>
            <Cursor blink />
          </TerminalBody>
        </TerminalFrame>
      </div>
    );
  }
}

module.exports = DemoSection;
