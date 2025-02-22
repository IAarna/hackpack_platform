import { useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material';
import { Link } from 'react-router-dom';

function SignUp() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    // Basic Info
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    
    // Social Links
    github: '',
    linkedin: '',
    portfolio: '',
    
    // Skills Assessment
    programmingExperience: '',
    preferredLanguages: [],
    hackathonExperience: '',
    
    // Questionnaire responses
    questionnaire: {},
  });

  const steps = ['Basic Info', 'Social Links', 'Skills Assessment', 'Questionnaire'];

  const questions = [
    {
      id: 1,
      question: "What is your experience with version control systems?",
      options: [
        "No experience",
        "Basic understanding of Git",
        "Comfortable with Git and GitHub",
        "Advanced Git user"
      ]
    },
    {
      id: 2,
      question: "How do you approach problem-solving in coding?",
      options: [
        "Break down into smaller problems",
        "Search for existing solutions",
        "Collaborate with others",
        "Trial and error"
      ]
    },
    // Add more questions...
  ];

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <TextField
              fullWidth
              label="Full Name"
              margin="normal"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              sx={{ /* ... TextField styles ... */ }}
            />
            {/* Add other basic info fields */}
          </Box>
        );
      case 1:
        return (
          <Box>
            <TextField
              fullWidth
              label="GitHub Profile URL"
              margin="normal"
              value={formData.github}
              onChange={(e) => setFormData({ ...formData, github: e.target.value })}
              sx={{ /* ... TextField styles ... */ }}
            />
            {/* Add other social link fields */}
          </Box>
        );
      case 2:
        return (
          <Box>
            <FormControl component="fieldset" sx={{ width: '100%', mb: 3 }}>
              <FormLabel sx={{ color: '#fff', mb: 2 }}>
                Programming Experience
              </FormLabel>
              <RadioGroup
                value={formData.programmingExperience}
                onChange={(e) => setFormData({ 
                  ...formData, 
                  programmingExperience: e.target.value 
                })}
              >
                {/* Add experience options */}
              </RadioGroup>
            </FormControl>
            {/* Add other skills assessment fields */}
          </Box>
        );
      case 3:
        return (
          <Box>
            {questions.map((q) => (
              <FormControl key={q.id} component="fieldset" sx={{ width: '100%', mb: 3 }}>
                <FormLabel sx={{ color: '#fff', mb: 2 }}>
                  {q.question}
                </FormLabel>
                <RadioGroup
                  value={formData.questionnaire[q.id] || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    questionnaire: {
                      ...formData.questionnaire,
                      [q.id]: e.target.value
                    }
                  })}
                >
                  {q.options.map((option, idx) => (
                    <FormControlLabel
                      key={idx}
                      value={option}
                      control={<Radio sx={{ color: '#FF4D4D' }} />}
                      label={option}
                      sx={{ color: '#fff' }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            ))}
          </Box>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper
        elevation={0}
        sx={{
          p: 4,
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* ... Stepper and form content ... */}
      </Paper>
    </Container>
  );
}

export default SignUp; 