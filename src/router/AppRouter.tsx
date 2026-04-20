import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/layout/Layout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import WorkPage from '@/pages/WorkPage';
import BlogPage from '@/pages/BlogPage';
import ContactPage from '@/pages/ContactPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Catch-all route to handle 404s gracefully */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};