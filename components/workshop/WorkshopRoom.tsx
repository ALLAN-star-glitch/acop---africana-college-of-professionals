'use client';

import React from 'react';
import { LogOut, Video, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

interface WorkshopRoomProps {
  meetingLink: string;
  onLogout: () => void;
  workshopTitle?: string;
  workshopDate?: string;
  workshopTime?: string;
  facilitator?: string;
  coordinator?: string;
}

const WorkshopRoom = ({
  meetingLink,
  onLogout,
  workshopTitle = 'Teachers\' Mindful Self-Compassion Online Workshop - Day 2',
  workshopDate = '21st July 2026',
  workshopTime = '6:00 p.m. - 8:00 p.m. (EAT)',
  facilitator = 'Dr. Susan Gitau',
  coordinator = 'Alice Songok',
}: WorkshopRoomProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-orange-50 py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <Image
              src="/acoplogo.jpg"
              alt="Africana College of Professionals"
              width={60}
              height={60}
              className="h-auto cursor-pointer"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Workshop Room</h1>
              <p className="text-sm text-gray-500">{workshopTitle}</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50 cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        {/* Meeting Card - Clean, minimal */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Top Banner */}
          <div className="bg-gradient-to-r from-purple-600 to-orange-500 p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-2">Ready to Join?</h2>
            <p className="text-white/80 text-sm">
              Click the button below to join today&apos;s workshop session
            </p>
          </div>

          {/* Join Button - Animated Purple */}
          <div className="p-8 flex justify-center">
            <a
              href={meetingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg cursor-pointer w-full max-w-md animate-pulse"
            >
              <Video className="w-6 h-6" />
              Join Session Now
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-gray-400">
          <p>© 2026 Africana College of Professionals. All rights reserved.</p>
          <p className="mt-1">
            Need help? Contact{' '}
            <a href="mailto:info@acop.co.ke" className="text-purple-600 hover:underline cursor-pointer">
              info@acop.co.ke
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkshopRoom;