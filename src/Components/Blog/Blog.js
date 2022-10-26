import React from 'react';

const Blog = () => {
    return (
        <div className='blog-container '>
            <div className='text-center bg-slate-200 p-10 mb-5'>
                <h1 className='text-3xl text-red-600 font-bold '>Question 1 : What is cors?</h1>
                <p className='mb-9'>Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.</p>
            </div>
            <div className='text-center bg-slate-200 p-10 mb-5'>
                <h1 className='text-3xl text-red-600 font-bold'>Question 2 : Why we are using firebase? What other options do you have to implement authentication?</h1>
                <p className=''>Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. For Mobile or Web Apps. Customize Your App. Cross-Platform Solutions.</p>
                <p className='text-2xl font-bold'>## Other options to implement authentication</p>
                <ol className='mb-9'>
                    <li>Back4App</li>
                    <li>Backendless</li>
                    <li>Kuzzle</li>
                    <li>Pubnub</li>
                    <li>Kumulos</li>
                    <li>Appwrite</li>
                    <li>Deployd</li>
                    <li>NHost</li>
                    <li>AWS Amplify</li>
                    <li>Heroku</li>
                </ol>
            </div>
            <div className='text-center bg-slate-200 p-10 mb-5'>
                <h1 className='text-3xl text-red-600 font-bold'>Question 3 : How does the private route work?</h1>
                <p className='mb-9'>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in</p>
            </div>
            <div className='text-center bg-slate-200 p-10 mb-5'>
                <h1 className='text-3xl text-red-600 font-bold'>Question 4 : What is Node? How does Node work?</h1>
                <p className='mb-9'>Node : Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.</p>
                <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
            </div>

        </div>
    );
};

export default Blog;