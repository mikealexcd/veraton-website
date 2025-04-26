'use client';

import Image from 'next/image';
import Elizabeth from '@/assets/avatars/Elizabeth.png';
import Stacey from '@/assets/avatars/Stacey.png';

export default function AboutUs() {
  const teamMembers = [
    {
      name: 'Elizabeth',
      role: 'Design Lead',
      description: 'Turning complex problems into delightful experiences is my superpower! ✨',
      avatar: Elizabeth,
      color: 'bg-accent-lavender',
      borderColor: 'border-accent-pink',
      interests: ['Design Systems', 'User Psychology', 'Ice Cream 🍦']
    },
    {
      name: 'Stacey',
      role: 'UX Researcher',
      description: 'I ask the questions that unlock amazing user insights! 🔍',
      avatar: Stacey,
      color: 'bg-primary-light/10',
      borderColor: 'border-primary-light',
      interests: ['User Interviews', 'Data Analysis', 'Coffee ☕']
    }
  ];

  return (
    <div id="about" className="py-16 bg-gradient-to-b from-accent-lavender to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary sm:text-4xl">
            Meet Your UX Superheroes!
          </p>
          <p className="mt-4 max-w-2xl text-xl text-primary-light lg:mx-auto">
            We&apos;re not your typical design team. We bring personality, creativity, and a dash of fun to every project!
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.name} 
                className={`rounded-2xl ${member.color} border-2 ${member.borderColor} p-8 transition-transform hover:-translate-y-1 duration-300`}
              >
                <div className="flex flex-col items-center space-y-6">
                  <div className="relative w-48 h-48">
                    <div className="absolute -inset-4">
                      <div className="w-full h-full rotate-6 rounded-xl bg-gradient-to-r from-accent-pink via-primary-light to-accent-yellow opacity-30 blur"></div>
                    </div>
                    <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src={member.avatar}
                        alt={`${member.name}'s avatar`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                      />
                    </div>
                  </div>

                  <div className="text-center space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{member.name}</h3>
                      <p className="text-accent-yellow font-medium">{member.role}</p>
                    </div>
                    <p className="text-primary-light">{member.description}</p>
                    
                    <div className="space-y-2">
                      <p className="font-medium text-primary">Loves:</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {member.interests.map((interest) => (
                          <span
                            key={interest}
                            className="px-3 py-1 rounded-full text-sm font-medium bg-white shadow-sm text-primary hover:bg-accent-yellow hover:text-white transition-colors"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl text-primary-light italic">
              &ldquo;We believe great UX should bring a smile to everyone&apos;s face! 😊&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 