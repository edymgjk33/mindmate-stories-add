import React from 'react';
import { Star, Award, Trophy, Shield, Sparkles, CheckCircle } from 'lucide-react';

const MediaBanners = () => {
  const recognitionBadges = [
    {
      name: "Industry Recognition",
      logo: "★★★★★",
      bgColor: "bg-blue-600",
      textColor: "text-white",
      description: "Top-rated wellness platform"
    },
    {
      name: "User Choice Award",
      logo: "AWARD",
      bgColor: "bg-purple-600",
      textColor: "text-white",
      description: "Most loved mental health app"
    },
    {
      name: "Innovation Leader",
      logo: "TECH",
      bgColor: "bg-green-600",
      textColor: "text-white",
      description: "AI wellness innovation"
    },
    {
      name: "Excellence Badge",
      logo: "BEST",
      bgColor: "bg-orange-600",
      textColor: "text-white",
      description: "Excellence in mental health"
    }
  ];

  const achievements = [
    {
      title: "Industry Recognition Award",
      description: "Recognized as a leading wellness innovation platform",
      icon: Award,
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "User Choice Excellence",
      description: "Selected by users as the best wellness application",
      icon: Trophy,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Innovation Excellence Award",
      description: "Recognized for breakthrough AI wellness approach",
      icon: Star,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Technology Excellence",
      description: "Awarded for revolutionary wellness technology",
      icon: Sparkles,
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-200/10 to-blue-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-200/10 to-pink-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full px-6 py-3 shadow-lg border border-green-200/50">
            <Award className="w-5 h-5 text-green-600" />
            <span className="text-sm font-bold text-green-700">As Featured in Leading Publications</span>
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Wellness Enthusiasts
            </span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Our innovative approach to mental wellness has earned recognition and trust 
            from users and wellness professionals worldwide.
          </p>
        </div>

        {/* Enhanced Recognition Badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-16">
          {recognitionBadges.map((badge, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div className={`${badge.bgColor} ${badge.textColor} px-8 py-6 rounded-2xl font-bold text-2xl tracking-wide hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer`}>
                {badge.logo}
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap shadow-lg">
                  {badge.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-200/50"
            >
              {/* Decorative gradient */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${achievement.color} opacity-10 rounded-full -translate-y-10 translate-x-10`}></div>
              
              <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-bold text-gray-900 mb-3 text-lg text-center leading-tight">
                {achievement.title}
              </h3>
              
              <p className="text-gray-700 font-medium text-center text-sm leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200/50">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Wellness Professionals Choose MindMate AI
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto font-medium">
              Our commitment to excellence, security, and evidence-based approaches has earned trust 
              from wellness professionals and users worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200/50 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-lg">Privacy Protected</h4>
              <p className="text-gray-700 font-medium">Enterprise-grade security and data protection</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-lg">Evidence-Based</h4>
              <p className="text-gray-700 font-medium">Built on proven therapeutic methodologies and research</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200/50 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-lg">Innovation Leader</h4>
              <p className="text-gray-700 font-medium">Pioneering the future of AI-powered mental health</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaBanners;