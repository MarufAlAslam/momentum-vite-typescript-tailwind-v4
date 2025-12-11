import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useState } from 'react'

const pricingData = {
  monthly: [
    {
      name: 'Basic',
      subtitle: 'Boost your productivity with the power of generative AI.',
      price: 24,
      popular: false,
      features: [
        '+20 Cutting-edge AI Models',
        '1200 AI Credits / month',
        'GPTs (AI Assistants)',
        'Prompts Library',
        'Advanced search',
        'Chat Folders'
      ]
    },
    {
      name: 'Pro',
      subtitle: 'GPT-4 Turbo with unlimited access and advanced AI features.',
      price: 24,
      popular: true,
      features: [
        'Everything in Free',
        'Cutting-edge image generation',
        '1500 AI Credits / month',
        'DALL·E 3',
        'Stable Diffusion XL 1.0',
        'Stable Diffusion 1.6'
      ]
    },
    {
      name: 'Team',
      subtitle: 'Teamwork, data privacy & security, premium support.',
      price: 24,
      popular: false,
      features: [
        'Everything in Pro',
        'Team Spaces & Collaboration',
        'Advanced admin panel with permissions',
        'Enterprise-grade Security & Privacy',
        'Performance Analytics & Insights',
        'Priority Support'
      ]
    }
  ],
  annual: [
    {
      name: 'Basic',
      subtitle: 'Boost your productivity with the power of generative AI.',
      price: 12,
      popular: false,
      features: [
        '+20 Cutting-edge AI Models',
        '1200 AI Credits / month',
        'GPTs (AI Assistants)',
        'Prompts Library',
        'Advanced search',
        'Chat Folders'
      ]
    },
    {
      name: 'Pro',
      subtitle: 'GPT-4 Turbo with unlimited access and advanced AI features.',
      price: 12,
      popular: true,
      features: [
        'Everything in Free',
        'Cutting-edge image generation',
        '1500 AI Credits / month',
        'DALL·E 3',
        'Stable Diffusion XL 1.0',
        'Stable Diffusion 1.6'
      ]
    },
    {
      name: 'Team',
      subtitle: 'Teamwork, data privacy & security, premium support.',
      price: 12,
      popular: false,
      features: [
        'Everything in Pro',
        'Team Spaces & Collaboration',
        'Advanced admin panel with permissions',
        'Enterprise-grade Security & Privacy',
        'Performance Analytics & Insights',
        'Priority Support'
      ]
    }
  ]
}

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')
  const currentPlans = pricingData[billingCycle]

  return (
    <section className="py-20 bg-white">
      <div className="px-12 max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[64px] font-medium text-[#030712] mb-4 leading-[74px]">
            Simple pricing plans
          </h2>
          <p className="text-[20px] font-normal text-[#475569] mb-12">
            Enjoy the power of the best AI modelson a single platform
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-2 p-1 bg-[#f8fafc] rounded-full border border-[#e2e8f0]">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-[14px] transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-[#020617] shadow-lg font-medium'
                  : 'text-[#475569]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-[14px] transition-all ${
                billingCycle === 'annual'
                  ? 'bg-white text-[#020617] shadow-lg font-medium'
                  : 'text-[#475569]'
              }`}
            >
              Annual
              <span className="px-2 py-0.5 text-[12px] font-normal text-[#6d28d9] rounded-full" style={{ backgroundColor: 'rgb(237, 233, 254)' }}>
                SAVE 30%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-3 gap-6">
          {currentPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative border border-[#e2e8f0] rounded-[24px] p-8 shadow-sm"
              style={{ backgroundColor: plan.popular ? 'rgb(237, 233, 254)' : 'white' }}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute top-8 right-8">
                  <span className="px-3 py-2 text-[12px] font-normal text-[#7c3aed] bg-white rounded-full">
                    Most popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-[32px] font-medium text-[#020617] mb-3">
                {plan.name}
              </h3>

              {/* Plan Subtitle */}
              <p className="text-[16px] font-normal text-[#475569] mb-6">
                {plan.subtitle}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-[48px] font-medium text-[#020617]">
                  ${plan.price}
                </span>
                <span className="text-[24px] text-[#475569]">/m</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[16px] text-[#475569]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3 rounded-full text-[16px] font-medium transition-all ${
                  plan.popular
                    ? 'bg-[#020617] text-white hover:bg-[#020617]/90'
                    : 'bg-white text-[#020617] border border-[#e2e8f0] hover:bg-[#f8fafc]'
                }`}
                style={{ boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.05)' }}
              >
                Get started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
