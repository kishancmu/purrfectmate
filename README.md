# Purrfectmate

## Technology Stack

1. **React (v18.2.0)**: Chosen for its dynamic UI rendering capabilities, ideal for building interactive web applications with a rich user interface.
2. **React-DOM (v18.2.0)**: Complements React in web development by efficiently managing the Document Object Model (DOM).
3. **Ant Design (antd v5.11.5)**: Selected for its extensive library of React UI components, easing the design process with a variety of ready-to-use elements.
4. **Tailwind CSS (v3.3.5)**: A utility-first CSS framework used for creating custom and responsive designs quickly. Configured to apply styles with high specificity and without global resets, offering more control over the design.
5. **React Router DOM (v6.20.0)**: Facilitates web app navigation through dynamic routing, enhancing user experience by avoiding page reloads.
6. **Sass (v1.69.5)**: Provides advanced styling features like variables and mixins, allowing for more organized and maintainable CSS.
7. **React Icons (v4.12.0)**: Offers a wide range of customizable icons to enrich the user interface.
8. **React Password Strength Bar (v0.4.1)**: Improves security awareness by visually representing password strength.
10. **React Scripts (v5.0.1)**: Simplifies the setup and management of the development environment.
12. **Netlify**: Cloud platform that streamlines web development by providing automated deployment.

## Link to Style Guide

[Style Guide Link](https://purrfectmate.netlify.app/styleguide)

## Operation Instructions

1. **Installation**: Run `npm install` to install all dependencies.
2. **Starting the App**: Execute `npm start` to launch the application in development mode.

## Limitations

**Incomplete or Hard-Coded Functionality**:
1. **Real-time Communication**: The application lacks real-time communication features, including notifications and online chat.
2. **Persistent Storage**: There is no database implemented to store user profiles, chat history, pack information, playdates, etc.
3. **CRUD APIs**: The absence of Restful endpoints or a backend system for passing and validating data.
4. **User Authentication**: While login/signup functionality is present, it is limited to local storage for user authentication.

**Additional Limitations**:
5. **Location**: The application does not utilize location data to provide nearby match suggestions, and location auto-complete is not available. Users must manually input their location.
6. **Notifications**: Real-time notifications for matches, playdates, and pack playdate requests are not implemented.
7. **Real-time Matches**: The application lacks the capability for real-time matches; matches are hard-coded during user onboarding.
8. **Profile Picture**: Users cannot upload profile pictures for pets and pet owners; all pictures in the app are hardcoded.
9. **Search Filter**: Match settings only work for pets, gender, and age, limiting search criteria.
10. **Single Account per Session**: Only one user account can be created and logged in at a time. Attempting to set up multiple user accounts on a single session will overwrite previous user data since the same local storage is used for the domain.
11. **Device Compatibility**: The app is designed for mobile phones, and full functionality is only ensured in mobile view on the Google Chrome browser (with a minimum height of 667px and a width ranging from greater than 350px to less than 450px).