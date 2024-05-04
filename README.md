# AltWorld

This project was generated using Next.js.

## Description

AltWorld is a platform designed for managing assignments and profiles. It allows users to view profiles, shortlist them, and manage assignments efficiently.

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.


### RootLayout

- `RootLayout` is a component used to provide a consistent layout structure for the application.
- It sets the HTML lang attribute to 'en' and applies global styles defined in `globals.css`.
- It utilizes the Inter font from Google Fonts.

### Home

- The `Home` component represents the main dashboard page of the application.
- It displays a sidebar, a list of profiles, and profile details.
- Users can select profiles, view their details, and shortlist them.

### ProfileCard

- `ProfileCard` is a reusable component used to display individual profile cards.
- It includes profile information such as name, email, and percentage.
- Clicking on a profile card selects the profile.

### ProfileDetails

- `ProfileDetails` displays detailed information about a selected profile.
- It includes profile image, name, email, percentages, about, experience, hobbies, introduction, and a video.
- Users can shortlist or remove profiles from the shortlist.

### SideBar

- `SideBar` is a sidebar component providing navigation and options for creating assignments.
- It includes icons for navigation and a button to create a new assignment.

### Profiles

- `Profiles` component displays a list of profiles along with their scores and status.
- Users can toggle between reviewing all profiles and viewing only shortlisted profiles.

## Dependencies

- Next.js
- React
- Next.js Google Fonts
- Tailwind CSS

## Contributing

Contributions are welcome. Please create a pull request for any changes or fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
