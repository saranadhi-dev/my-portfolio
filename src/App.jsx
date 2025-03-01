import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Nav } from 'react-bootstrap';

const App = () => {
  return (
    <div className='container'>
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        className='header-nav'
      >
        <Nav.Item>
          <Nav.Link href="/home" >About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Experience</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Blogs</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Projects</Nav.Link>
        </Nav.Item>
      </Nav>

      <div style={{padding:'80px'}}>
        <div style={{ display: 'flex', justifyContent: "center" }}>
          <span class="box box-text">
            Hi, I'm Saran Aadithyan
            <br />
            <strong style={{fontSize:'36px'}}>Software developer</strong>
          </span>
        </div>

        <div class="share">
          <a href="" style={{ display: 'flex', justifyContent: "center", alignItems: 'center', gap: '10px' }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
          </svg><strong>Github</strong></a>
          <a href="" style={{ display: 'flex', justifyContent: "center", alignItems: 'center', gap: '10px' }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
          </svg><strong>Leetcode</strong></a>
        </div>
      </div>

      <div class="card">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <hr style={{ flex: 1 }} />
          <span style={{ margin: '0 10px',fontSize:'28px',margin:'12px' }}>About Me</span>
          <hr style={{ flex: 1 }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', padding: '25px', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ width: '50%', maxWidth: '800px' }}>
            <p class="info">
              As an Android Developer with over 8 years of experience, I have a deep-seated passion for crafting visually stunning and highly functional mobile applications. My journey in tech began with a fascination for user interface design, which naturally evolved into a career in mobile development, where I could bring my designs to life.
              <br />
              My expertise lies in creating seamless user experiences, with a portfolio that includes both enterprise and consumer apps. I pride myself on writing clean, maintainable code and have a keen eye for detail, ensuring that every pixel is in its right place. My approach is user-centric, and I am committed to building applications that are not only beautiful but also intuitive and accessible.
              <br />
              In my current role, I have successfully led projects that resulted in a 50% increase in user retention. I am deeply involved in the full app lifecycle, from concept to deployment and support. I am also an advocate for best practices in Android development and enjoy sharing my insights through blog posts and speaking engagements.
              <br />
              Continuous improvement is my mantra, and I stay abreast of the latest industry trends and technologies. I am an active participant in Android development forums and enjoy collaborating with peers to solve complex challenges and advance the field of mobile development.
            </p>
          </div>
          <div class="img"></div>
        </div>
      </div>

      <div class="form-container">
        <form class="form">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="text" id="email" name="email" required="" />
          </div>
          <div class="form-group">
            <label for="email">Name</label>
            <input type="text" id="email" name="email" required="" />
          </div>
          <div class="form-group">
            <label for="textarea">Message</label>
            <textarea name="textarea" id="textarea" rows="10" cols="50" required="">          </textarea>
          </div>
          <button class="form-submit-btn" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;