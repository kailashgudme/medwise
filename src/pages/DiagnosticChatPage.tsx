import React, { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, Bot, User, FileText } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
  timestamp: Date;
  attachment?: string;
}

const DiagnosticChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: 'Hello! I\'m your AI Diagnostic Assistant. I can help analyze your medical reports. Please upload your reports or describe your symptoms.',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = async () => {
    if ((!input.trim() && !selectedFile) || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: input,
      timestamp: new Date(),
      attachment: selectedFile ? selectedFile.name : undefined,
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setSelectedFile(null);

    // Simulate AI processing
    setTimeout(() => {
      let responseText = '';

      if (selectedFile) {
        const fileName = selectedFile.name.toLowerCase();
        if (fileName.includes('blood')) {
          responseText = `I've analyzed your blood test report "${selectedFile.name}". Your Complete Blood Count (CBC) parameters, including Haemoglobin, WBC, RBC, and Platelets, are all within normal limits. However, your Lipid Profile indicates mild Hyperlipidemia. Your Total Cholesterol (210 mg/dL), Triglycerides (165 mg/dL), and LDL "bad" Cholesterol (135 mg/dL) are slightly elevated.\n\nPrecautions and Recommendations:\n• Dietary Changes: Reduce intake of saturated fats. Increase fiber-rich foods like oats, beans, and fruits.\n• Physical Activity: Aim for at least 30 minutes of moderate aerobic exercise most days of the week.\n• Hydration: Drink plenty of water throughout the day.\n\nPlease discuss these results with your doctor for a tailored management plan.`;
        } else if (fileName.includes('mri')) {
          responseText = `I've analyzed your MRI report "${selectedFile.name}". The results show mild degenerative disc changes at the L4-L5 level. More importantly, there is a moderate left paracentral disc protrusion at L5-S1 that is compressing your left S1 nerve root. This directly correlates with your symptoms of chronic lower back pain and left-sided sciatica.\n\nPrecautions to take:\n• Avoid Heavy Lifting: Do not lift heavy objects or bend repetitively at the waist.\n• Posture: Maintain proper posture while sitting and use lumbar support if needed.\n• Resting Positions: Sleeping with a pillow under your knees (if on your back) or between your knees (if on your side) can relieve pressure on your lower back.\n• Hot/Cold Therapy: Apply cold packs initially to reduce inflammation, then switch to heat to relax muscles.\n\nI strongly recommend discussing these findings with your orthopedic doctor or neurologist to explore appropriate treatment options.`;
        } else if (fileName.includes('xray')) {
          responseText = `I've analyzed your X-ray report "${selectedFile.name}". The results show a normal chest radiograph with no acute cardiopulmonary abnormalities detected. Your cardiac silhouette, lungs, and bony thorax are all clear. Since you are experiencing a persistent cough and mild fever, these symptoms are likely due to a mild respiratory infection.\n\nPrecautions and Home Care:\n• Rest: Get plenty of sleep to help your body fight the infection.\n• Hydration: Drink warm fluids like herbal tea or broth to soothe your throat and stay hydrated.\n• Air Moisture: Use a humidifier in your room to ease coughing and clear congestion.\n• Isolation: Try to minimize contact with others to prevent spreading the infection.\n\nPlease consult a doctor for proper symptomatic treatment.`;
        } else {
          responseText = `I've received your file "${selectedFile.name}". Based on the information provided, please consult with a healthcare professional to get an accurate interpretation of these results.`;
        }
      } else if (input.toLowerCase().includes('headache')) {
        responseText = 'Based on your description of headaches, there could be several causes including tension, migraines, dehydration, or eye strain.\n\nPrecautions and Home Care:\n• Hydration: Drink plenty of water, as dehydration is a common cause.\n• Rest: Rest in a quiet, dark room.\n• Screen Time: Follow the 20-20-20 rule to reduce eye strain (every 20 minutes, look at something 20 feet away for 20 seconds).\n• Stress Management: Practice deep breathing or meditation.\n\nIf you\'re experiencing severe, persistent headaches, especially with other symptoms like vision changes or neck stiffness, please consult a doctor immediately.';
      } else if (input.toLowerCase().includes('chest pain')) {
        responseText = 'Chest pain can be a symptom of several conditions ranging from muscle strain to serious heart problems. Given the potential seriousness, I recommend seeking immediate medical attention.\n\nImmediate Precautions:\n• Stop any physical activity immediately, sit down, and rest.\n• Loosen any tight clothing.\n• Stay calm and take slow, deep breaths.\n• Do not drive yourself to the hospital; call for emergency services or have someone else drive you.';
      } else if (input.toLowerCase().includes('diabetes') || input.toLowerCase().includes('blood sugar')) {
        responseText = 'From your description, it sounds like you\'re concerned about diabetes symptoms. Common signs include increased thirst, frequent urination, unexplained weight loss, and fatigue.\n\nPrecautions to take before your doctor\'s appointment:\n• Diet: Avoid sugary drinks, sweets, and simple carbohydrates. Opt for whole grains, lean proteins, and vegetables.\n• Hydration: Drink water instead of juices or sodas.\n• Physical Activity: Engage in light to moderate exercise, like walking, to help naturally regulate blood sugar.\n• Monitoring: If you have a glucometer, monitor your levels and keep a log for your doctor.\n\nPlease schedule an appointment with your doctor for proper testing.';
      } else {
        responseText = 'Thank you for sharing this information. To provide a more accurate analysis, could you please upload any relevant medical reports or provide more specific details about your symptoms? This will help me give you better insights.';
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: responseText,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 2000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-blue-700 text-white p-4">
              <div className="flex items-center">
                <Bot size={24} className="mr-3" />
                <div>
                  <h1 className="text-xl font-bold">AI Diagnostic Assistant</h1>
                  <p className="text-blue-100 text-sm">Upload your medical reports for analysis</p>
                </div>
              </div>
            </div>
            
            {/* Chat Messages */}
            <div className="h-[500px] overflow-y-auto p-4 bg-gray-50">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex mb-4 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.type === 'user' 
                        ? 'bg-blue-600 text-white rounded-br-none' 
                        : 'bg-white text-gray-800 shadow-sm rounded-bl-none'
                    }`}
                  >
                    <div className="flex items-center mb-2">
                      <div className={`p-1 rounded-full ${message.type === 'user' ? 'bg-blue-500' : 'bg-blue-100'} mr-2`}>
                        {message.type === 'user' ? 
                          <User size={16} className="text-white" /> : 
                          <Bot size={16} className="text-blue-700" />
                        }
                      </div>
                      <span className={`text-xs ${message.type === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                        {message.type === 'user' ? 'You' : 'AI Assistant'} • {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </span>
                    </div>
                    <p className={`whitespace-pre-wrap ${message.type === 'user' ? 'text-white' : 'text-gray-800'}`}>
                      {message.text}
                    </p>
                    {message.attachment && (
                      <div className={`mt-2 flex items-center ${message.type === 'user' ? 'text-blue-100' : 'text-blue-600'}`}>
                        <FileText size={16} className="mr-1" />
                        <span className="text-sm">{message.attachment}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start mb-4">
                  <div className="bg-white text-gray-800 rounded-lg rounded-bl-none p-4 shadow-sm max-w-[80%]">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
                      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            {/* File Upload Preview */}
            {selectedFile && (
              <div className="p-2 border-t border-gray-200 bg-blue-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText size={16} className="text-blue-700 mr-2" />
                    <span className="text-sm font-medium text-gray-700">{selectedFile.name}</span>
                  </div>
                  <button 
                    onClick={() => setSelectedFile(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
            
            {/* Input Area */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center">
                <button 
                  onClick={triggerFileInput}
                  className="p-2 text-gray-500 hover:text-blue-700 focus:outline-none"
                >
                  <Paperclip size={20} />
                </button>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  className="hidden" 
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.txt"
                />
                <div className="flex-grow">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message or upload a medical report..."
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    rows={2}
                  />
                </div>
                <button
                  onClick={handleSend}
                  disabled={isLoading || (!input.trim() && !selectedFile)}
                  className={`ml-2 p-2 rounded-full ${
                    isLoading || (!input.trim() && !selectedFile)
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-700 text-white hover:bg-blue-800'
                  } focus:outline-none transition duration-300`}
                >
                  <Send size={20} />
                </button>
              </div>
              <div className="mt-2 text-xs text-gray-500">
                <p>
                  Note: This AI assistant is for informational purposes only and does not replace professional medical advice. 
                  Always consult with a healthcare provider for medical concerns.
                </p>
              </div>
            </div>
          </div>
          
          {/* Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-700 mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Privacy Protected</h3>
              <p className="text-gray-600 text-center">
                Your health data is private and secure. We use advanced encryption to protect your information.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-700 mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Instant Analysis</h3>
              <p className="text-gray-600 text-center">
                Get preliminary insights quickly with our advanced AI system trained on medical data.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-700 mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Expert Verification</h3>
              <p className="text-gray-600 text-center">
                Our healthcare professionals review AI analyses to ensure accuracy and provide proper guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticChatPage;