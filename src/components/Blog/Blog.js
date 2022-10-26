import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="dark:bg-gray-800 ">
        <div className="w-3/6 mx-auto">
          <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-700">
            <div className="pt-6 pb-4 space-y-2">
              <span>26 October</span>
              <h1 className="text-3xl font-bold">What is CORS</h1>
              <p>
                Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                mechanism that allows a server to indicate any origins (domain,
                scheme, or port) other than its own from which a browser should
                permit loading resources. CORS also relies on a mechanism by
                which browsers make a "preflight" request to the server hosting
                the cross-origin resource, in order to check that the server
                will permit the actual request. In that preflight, the browser
                sends headers that indicate the HTTP method and headers that
                will be used in the actual request.
              </p>
            </div>
            <div className="pt-6 pb-4 space-y-2">
              <span>26 October</span>
              <h1 className="text-3xl font-bold">
                Why are you using firebase? What other options do you have to
                implement authentication?
              </h1>
              <p>
                I am using firebase for web authentication and web hosting.
                Firebase is part of google so i think it is more secure to use.
                Google is the largest tech company and they know to secure their
                data and firebase is easy to use. <br />
                <br />I have implemented authentication with email and password,
                google sign in option and github sign in option. There are other
                options to implement but i choose to do these three. But i can
                do the other authentication as well.
              </p>
            </div>
            <div className="pt-6 pb-4 space-y-2">
              <span>26 October</span>
              <h1 className="text-3xl font-bold">
                How does the private route work?
              </h1>
              <p>
                The private route is similar to public route but the difference
                is private redirect URL and authenticate condition. If the user
                is not authenticated he will be redirected to the login page and
                the only user can access the private route components if the
                user is logged in.
              </p>
            </div>
            <div className="pt-6 pb-4 space-y-2">
              <span>26 Octover</span>
              <h1 className="text-3xl font-bold">
                What is Node? How does Node work?
              </h1>
              <p>
                Node is an open source server environment. Node allows developer
                to write javascript code that runs directly in a computer
                process itself instead of in a browser. Node can, therefore, be
                used to write server-side applications with access to the
                operating system, file system, and everything else required to
                build fully-functional applications. <br />
                <br />
                It is a used as backend service where javascript works on the
                server-side of the application. This way javascript is used on
                both frontend and backend. Node.js runs on chrome v8 engine
                which converts javascript code into machine code, it is highly
                scalable, lightweight, fast, and data-intensive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
