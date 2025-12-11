import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: "What is Momentum?",
    answer: "Momentum is an AI-powered application designed to enhance productivity, boost motivation, and foster personal growth by providing tailored insights, reminders, and encouragement."
  },
  {
    question: "How does Momentum work?",
    answer: "Momentum utilizes advanced AI algorithms to analyze your habits, goals, and preferences. It then generates personalized recommendations, prompts, and affirmations to help you stay focused and motivated."
  },
  {
    question: "What features does Momentum offer?",
    answer: "Momentum offers a range of features including personalized goal tracking, habit formation assistance, daily reminders, mood tracking, and inspirational content delivery."
  },
  {
    question: "Is my data safe with Momentum?",
    answer: "Yes, protecting your data privacy and security is our top priority. Momentum employs industry-standard encryption protocols and follows best practices to safeguard your personal information."
  },
  {
    question: "Can Momentum integrate with other apps?",
    answer: "Momentum offers a range of features including personalized goal tracking, habit formation assistance, daily reminders, mood tracking, and inspirational content delivery."
  },
  {
    question: "What features does Momentum offer?",
    answer: "Yes, Momentum is designed to seamlessly integrate with popular productivity tools and platforms such as calendars, task managers, and note-taking apps to streamline your workflow."
  },
  {
    question: "Is Momentum available on all devices?",
    answer: "Momentum is available for both iOS and Android devices, as well as desktop computers through web browsers, ensuring accessibility across a wide range of devices."
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-10 bg-white">
      <div className="px-12 max-w-[900px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[64px] font-medium text-[#030712] mb-4 leading-[74px]">
            FAQ
          </h2>
          <p className="text-[20px] font-normal text-[#475569]">
            Frequently Asked Questions
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-[#e2e8f0]"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center gap-4 py-6 text-left transition-colors"
              >
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex-shrink-0"
                >
                  <Plus className="w-6 h-6 text-[#94a3b8]" />
                </motion.div>
                <span className="text-[18px] font-medium text-[#020617]">
                  {faq.question}
                </span>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pl-10 pb-6">
                      <p className="text-[16px] text-[#475569] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
