import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 class='text-4xl italic font-medium'>Blogs</h2>
        <div class='mt-20'>
            <h2 class='text-xl font-semibold'>How to improve performance of a React Application</h2>
            <p class='mt-5 bg-gray-200 p-5 w-6/12 mx-auto'>To optimize React rendering, you need to make sure that components<br></br>receive only necessary props. It will let you control the<br></br>CPU consumption and avoid over-rendering unnecessary features.<br></br>The solution is to create a functional component that will<br></br>collect all props and redistribute them to other components.</p>
        </div>
        <div class='mt-20'>
            <h2 class='text-xl font-semibold'>What are some different ways to manage a State</h2>
            <p class='mt-5 bg-gray-200 p-5 w-6/12 mx-auto'>With a lot of trial and error, pilot programs,<br></br>and personal observance, it has been proven that React Native<br></br>apps can be structured into 5 types of state.<br></br>Each type of state follows a set of defined rules<br></br>and interacts with one another in a particular manner.<br></br>
            Based on these rules of each state.</p>
        </div>
        <div class='mt-20'>
            <h2 class='text-xl font-semibold'>How does prototypical inheritance work?</h2>
            <p class='mt-5 bg-gray-200 p-5 w-6/12 mx-auto'>The Prototypal Inheritance in JavaScript<br></br>used to add methods and properties in objects.<br></br>It is a method by which an object can<br></br>inherit the properties and methods of another object.</p>
        </div>
        <div class='mt-20'>
            <h2 class='text-xl font-semibold'>How to implement a search to find products by name in array</h2>
            <p class='mt-5 bg-gray-200 p-5 w-6/12 mx-auto'>By use filter method.<br></br>You can find your products name,<br></br>The filter() method creates a new array filled with<br></br>elements that pass a test provided by a function.</p>
        </div>
        <div class='my-20'>
            <h2 class='text-xl font-semibold'>What is a Unit Test and it's use</h2>
            <p class='mt-5 bg-gray-200 p-5 w-6/12 mx-auto'>Unit testing is a software development process<br></br>in which the smallest testable parts of an application,<br></br>called units, are individually and independently<br></br>scan for the proper operation.</p>
        </div>
        </div>
    );
};

export default Blogs;