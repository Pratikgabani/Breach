import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

import { Shield, Building2, Mail, User, Phone, Briefcase, Lock } from 'lucide-react';

function SignUp()
{
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        companyName: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        jobTitle: '',
        password: '',
        confirmPassword: '',
        industry: '',
        companySize: '',
      });
    
      const [errors, setErrors] = useState({});
    
      const validatePhone = (phone) => {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone) ? '' : 'Phone number must be exactly 10 digits';
      };
    
      const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email) ? '' : 'Please enter a valid email address';
      };
    
      const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!passwordRegex.test(password)) {
          return 'Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character';
        }
        return '';
      };
    
      const validateConfirmPassword = (password, confirmPassword) => {
        return password === confirmPassword ? '' : 'Passwords do not match';
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    
        // Clear error when user starts typing
        setErrors(prev => ({ ...prev, [name]: '' }));
    
        // Validate fields on change
        if (name === 'phone') {
          setErrors(prev => ({ ...prev, phone: validatePhone(value) }));
        } else if (name === 'email') {
          setErrors(prev => ({ ...prev, email: validateEmail(value) }));
        } else if (name === 'password') {
          setErrors(prev => ({
            ...prev,
            password: validatePassword(value),
            confirmPassword: validateConfirmPassword(value, formData.confirmPassword)
          }));
        } else if (name === 'confirmPassword') {
          setErrors(prev => ({
            ...prev,
            confirmPassword: validateConfirmPassword(formData.password, value)
          }));
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Validate all fields before submission
        const newErrors = {
          phone: validatePhone(formData.phone),
          email: validateEmail(formData.email),
          password: validatePassword(formData.password),
          confirmPassword: validateConfirmPassword(formData.password, formData.confirmPassword)
        };
    
        setErrors(newErrors);
    
        // Check if there are any errors
        if (Object.values(newErrors).some(error => error !== '')) {
          return;
        }
    
        // If no errors, proceed with form submission
        console.log('Form submitted:', formData);
        navigate("/login");
      };

    return(
        <>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Shield className="h-12 w-12 text-indigo-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Compliance Management System
          </h1>
          <p className="text-lg text-gray-600">
            Streamline your compliance processes with our automated solution
          </p>
        </div>

        <div className="bg-white py-8 px-6 shadow-xl rounded-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Company Information */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-indigo-500" />
                  Company Information
                </h2>
                
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
                    Industry
                  </label>
                  <select
                    name="industry"
                    id="industry"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    value={formData.industry}
                    onChange={handleChange}
                  >
                    <option value="">Select Industry</option>
                    <option value="finance">Financial Services</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="technology">Technology</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="retail">Retail</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="companySize" className="block text-sm font-medium text-gray-700">
                    Company Size
                  </label>
                  <select
                    name="companySize"
                    id="companySize"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    value={formData.companySize}
                    onChange={handleChange}
                  >
                    <option value="">Select Company Size</option>
                    <option value="1-50">1-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501-1000">501-1000 employees</option>
                    <option value="1000+">1000+ employees</option>
                  </select>
                </div>
              </div>

              {/* Personal Information */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <User className="h-5 w-5 text-indigo-500" />
                  Personal Information
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      required
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      required
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 flex items-center gap-1">
                    <Mail className="h-4 w-4" /> Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className={`mt-1 block w-full rounded-md border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 flex items-center gap-1">
                    <Phone className="h-4 w-4" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    placeholder="1234567890"
                    className={`mt-1 block w-full rounded-md border ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    } px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 flex items-center gap-1">
                    <Briefcase className="h-4 w-4" /> Job Title
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    id="jobTitle"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    value={formData.jobTitle}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Password Section */}
            <div className="pt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Lock className="h-5 w-5 text-indigo-500" />
                Set Your Password
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    className={`mt-1 block w-full rounded-md border ${
                      errors.password ? 'border-red-500' : 'border-gray-300'
                    } px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    required
                    className={`mt-1 block w-full rounded-md border ${
                      errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                    } px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button 
                type="submit"
                onSubmit={handleSubmit}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >Next
              </button>
            </div>

            {/* <p className="text-center text-sm text-gray-500 mt-4">
              Already have an account?{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign in
              </a>
            </p> */}
          </form>
        </div>
      </div>
    </div>
        </>
    )
}

export default SignUp;