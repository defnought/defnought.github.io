---
layout: post
title: The Tab Manifesto
tags: general recommended
---

Consider your desktop web browser application. A application that facilitates access to websites on the Internet. It does not provide only one tab of access through which all interaction with the Internet has to go through. It allows you to create as many windows and tabs as your memory can handle.

A distinction should be made between instances, windows and tabs with regards to an application. Multiple instances would mean that to the processor, these instances are different and as such, are treated as different applications. Multiple windows means that within an application instance, multiple windows of the applications can be opened. Tabs are located within windows.

Many desktop applications allow the user to open more than one window of an application instance and within a window, many tabs or sessions of interaction with the application. One of the factors that enabled multi-window or multi-tab features to be included in applications is the vast real state of a desktop or laptop computer.

Mobile phones compared to desktop computers have a very small screen. Information has to be condensed and distilled to make the best use of available screen space. In the example of a web browser, only one tab can be shown at a time and switches to other tabs necessitate a few more clicks. Mobile web browsers do not implement opening more than one window. Nevertheless, mobile web browsers still offer multiple tabs of access.

How do other applications compare? If you were to login into a social media site in a window on your web browser, you can open multiple tabs of the site and view different timelines and content at the same time. On a native mobile application, you are only afforded one window (and no tabs) through which you can access all the content the site has to offer.

I think native mobile applications enrich their user experience if they implement tabs within their window. Some applications already do this. For example, on Android, the ebook and pdf reader application [Readera](https://readera.org) allows you to open multiple activities of different books and can therefore switch between them using the system's application / activity switcher. However, what I have in mind is an in-app solution that allows users to open multiple tabs.

At the very least, an application should implement multiple tabs of access. Multiple instances is more difficult to implement and instance restoration is an even more difficult problem to solve. On Android, applications are distinguished by their package name, so running multiple instances of a progrm is not allowed. However, you can create multiple instances of an activity or fragment within your application.

There are exceptions where this design idea is a bad fit. If there is no variety or depth in the information or content the application is displaying, there is no need to implement a tab design. The design idea also makes the problems of job scheduling and resource utilisation more complex, as policies that govern the two problems within the context of tabs must be implemented.

An example where this design would be a great fit is a chat application. It is feasible that a user could open multiple tabs of different chats. A problem that could arise is when the user opens multiple tabs of the same chat. A solution would be to prevent the user from opening multiple tabs of the same chat, instead redirecting them to the existing tab or closing the existing tab.

The current iteration of this design idea is not dissimilar to that of mobile web browsers. Only one tab can occupy the screen and a switcher is incorporated on the tab's UI to facilitate switching to another tab. 

{% include image.html url="/assets/tab-manifesto/tab-design-infographic.png" description="Tab Design" %}

The first application developed with this design idea is called fileman. It is a file manager application for Android. The design idea meshes with the functionality a file manager should provide and the application is a good proof of concept for the design idea. A post about the application should be available soon.