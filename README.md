# Email AI - Smart Email Generator

![Email AI Logo](public/logo.svg)

Email AI is a modern web application that helps users generate professional emails using artificial intelligence. With various tone options and quick actions, it makes email writing effortless and efficient.

## Features

✨ **AI-Powered Email Generation**

- Context-aware email generation
- Multiple tone options (formal, friendly, cheerful, etc.)
- Smart content suggestions

🚀 **Quick Actions**

- Birthday wishes
- Appreciation messages
- Festival greetings
- Professional communications

💫 **User Experience**

- Clean, modern interface
- Real-time email preview
- Easy customization
- One-click sending

🔒 **Security**

- Secure authentication
- Data encryption
- Privacy focused

## Technology Stack

- **Frontend**

  - React with Vite
  - Tailwind CSS for styling
  - React Router for navigation
  - Lucide React for icons

- **Authentication**

  - Firebase Authentication

- **Email Services**
  - EmailJS for sending emails
  - Google's Generative AI for content generation

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Firebase account
- EmailJS account
- Google AI API key

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/email-generator.git
cd email-generator
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the root directory with your API keys:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id

VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_USER_ID=your_emailjs_user_id

VITE_GOOGLE_AI_API_KEY=your_google_ai_api_key
```

4. Start the development server

```bash
npm run dev
```

Visit `http://localhost:5173` to view the application.

## Usage

1. **Sign In/Sign Up**

   - Use your email or Google account to authenticate

2. **Generate Emails**

   - Select a quick action or write your own prompt
   - Choose the desired tone
   - Click "Generate Email"

3. **Customize and Send**
   - Edit the generated email
   - Enter recipient's email address
   - Click "Send Email"

## Screenshots

[Include screenshots of your application here]

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Google's Generative AI for powering the email generation
- Firebase for authentication services
- EmailJS for email delivery
- All contributors and supporters

## Support

For support, email support@email-ai.com or create an issue in this repository.
