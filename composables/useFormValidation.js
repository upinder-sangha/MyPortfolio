// composables/useFormValidation.js
export const useFormValidation = () => {
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateFile = (file) => {
    // Check file type
    const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain']
    if (!validTypes.includes(file.type)) {
      return { valid: false, message: 'Please upload a PDF, DOCX, or TXT file' }
    }
    
    // Check file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
      return { valid: false, message: 'File size must be less than 10MB' }
    }
    
    return { valid: true }
  }

  return { validateEmail, validateFile }
}