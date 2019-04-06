/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const DemoSection = require(`${process.cwd()}/core/DemoSection.js`);

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} alt="Project Logo" />
  </div>
);

const ProjectTitle = () => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('introduction', language)}>Read the Docs&nbsp;&nbsp;→</Button>
            <Button href="#install">Install</Button>
            <Button href="https://github.com/zhangkaiyulw/scaffold-kit">Github</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = () => (
  <Block layout="fourColumn">
    {[
      {
        content: 'Including instruction reordering, instruction reversing, compound command, multilevel option definition, option serialization, smart reporter, auto help message generation, unit testing support and more.',
        image: imgUrl('explosion.svg'),
        imageAlign: 'top',
        title: 'Powerful Feature Set',
      },
      {
        content: 'Few boilerplate code. Automated developing process. Wrap an existing project into a scaffolding tool in 1 minute with 3 commands.',
        image: imgUrl('thunder.svg'),
        imageAlign: 'top',
        title: 'Stunningly Easy to Develop',
      },
    ]}
  </Block>
);

const FeatureCallout = () => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>Feature Callout</h2>
    <MarkdownBlock>These are features of this project</MarkdownBlock>
  </div>
);

const LearnHow = () => (
  <div id="install" className="container paddingTop paddingBottom" style={{height: 330}}>
    <div className="wrapper">
      <div className="gridBlock">
        <div className="blockElement alignCenter imageAlignSide imageAlignLeft twoByGridBlock">
        <div class="blockImage">
          <img src={imgUrl('open-book.svg')} style={{maxHeight: 200, maxWidth: 200}} />
        </div>
          <div class="blockContent">
            <h2><div><span><p>Learn How</p></span></div></h2>
            <div>
              <span>
                Learn how to use Scaffold Kit through our detailed <a href={docUrl('start-a-new-project')}>programming guide</a>.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Install = () => (
  <div id="install" className="container lightBackground paddingTop paddingBottom" style={{height: 330}}>
    <div className="wrapper">
      <div className="gridBlock">
        <div className="blockElement alignCenter imageAlignSide imageAlignRight twoByGridBlock">
          <div class="blockContent">
            <h2><div><span><p>Installation</p></span></div></h2>
            <div>
              <span>
                <MarkdownBlock>
                  Install Scaffold Kit by running `npm install -g scaffold-kit-cli`.
                </MarkdownBlock>
              </span>
            </div>
          </div>
          <div class="blockImage">
            <img className="spinning-around" src={imgUrl('settings.svg')} style={{
              maxHeight: 200,
              maxWidth: 200
            }} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

class Index extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <DemoSection />
          <Features />
          <FeatureCallout />
          <Install />
          <LearnHow />
        </div>
      </div>
    );
  }
}

module.exports = Index;
