'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Check } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.subject,
          message: data.message,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to submit form');
      }

      setSubmitStatus('success');
      reset();

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
          Full Name
        </label>
        <input
          {...register('name')}
          id="name"
          type="text"
          placeholder="John Doe"
          className="w-full px-4 py-3 border border-slate-200 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-colors"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
          Email Address
        </label>
        <input
          {...register('email')}
          id="email"
          type="email"
          placeholder="john@example.com"
          className="w-full px-4 py-3 border border-slate-200 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-colors"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-slate-900 mb-2">
          Subject
        </label>
        <input
          {...register('subject')}
          id="subject"
          type="text"
          placeholder="Project Inquiry"
          className="w-full px-4 py-3 border border-slate-200 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-colors"
        />
        {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
          Message
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={6}
          placeholder="Tell us about your project..."
          className="w-full px-4 py-3 border border-slate-200 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-colors resize-none"
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
      </div>

      {/* Submit Status Messages */}
      {submitStatus === 'success' && (
        <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
          <Check size={20} />
          <span className="font-medium">Success! We'll be in touch soon.</span>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
          <p className="font-medium">Something went wrong. Please try again.</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}
