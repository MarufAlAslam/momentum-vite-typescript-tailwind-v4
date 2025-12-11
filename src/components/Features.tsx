import aiTool1 from '@/assets/ai-tool-1.svg'
import aiTool2 from '@/assets/ai-tool-2.svg'
import aiTool3 from '@/assets/ai-tool-3.avif'
import aiTool4 from '@/assets/ai-tool-4.avif'
import aiTool5 from '@/assets/ai-tool-5.svg'

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="px-12 max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[64px] font-semibold text-[#030712] mb-4 leading-tight">
            All AI tools are just in one<br />place and simple to use
          </h2>
          <p className="text-[20px] font-normal text-[#475569]">
            Get started with AI quickly and easily with<br />all your tools at your fingertips.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Time Saving Card - Spans 2 columns */}
          <div className="col-span-2 border border-[#e2e8f0] rounded-[24px] p-6 bg-[#f8fafc]">
            {/* Image */}
            <div className="mb-6 rounded-xl overflow-hidden">
              <img src={aiTool1} alt="Time Saving" className="w-full h-auto" />
            </div>
            <h3 className="text-[20px] font-medium text-[#020617] mb-3">
              Time Saving
            </h3>
            <p className="text-[16px] text-[#292f38]">
              Search for discussions, create folders, add tags, export data, and much more.
            </p>
          </div>

          {/* Web Search Card */}
          <div className="border border-[#e2e8f0] rounded-[24px] p-6 bg-[#f8fafc]">
            {/* Image */}
            <div className="mb-6 rounded-xl overflow-hidden">
              <img src={aiTool2} alt="Web Search" className="w-full h-auto" />
            </div>
            <h3 className="text-[20px] font-medium text-[#020617] mb-3">
              Web Search
            </h3>
            <p className="text-[16px] text-[#292f38]">
              Unleash the potential of cutting-edge AI through a seamless internet experience.
            </p>
          </div>

          {/* Multiple Models Card */}
          <div className="border border-[#e2e8f0] rounded-[24px] p-6 bg-[#f8fafc]">
            {/* Image */}
            <div className="mb-6 rounded-xl overflow-hidden">
              <img src={aiTool3} alt="Multiple Models" className="w-full h-auto" />
            </div>
            <h3 className="text-[20px] font-medium text-[#020617] mb-3">
              Multiple Models
            </h3>
            <p className="text-[16px] text-[#292f38]">
              Switch between models in the same chat: Text, images, web search.
            </p>
          </div>

          {/* Prompt Library Card */}
          <div className="border border-[#e2e8f0] rounded-[24px] p-6 bg-[#f8fafc]">
            {/* Image */}
            <div className="mb-6 rounded-xl overflow-hidden">
              <img src={aiTool4} alt="Prompt Library" className="w-full h-auto" />
            </div>
            <h3 className="text-[20px] font-medium text-[#020617] mb-3">
              Prompt Library
            </h3>
            <p className="text-[16px] text-[#292f38]">
              Enjoy exclusive prompts categorized by marketing, social media, HR, sales, and much more.
            </p>
          </div>

          {/* Chat Synchronization Card */}
          <div className="border border-[#e2e8f0] rounded-[24px] p-6 bg-[#f8fafc]">
            {/* Image */}
            <div className="mb-6 rounded-xl overflow-hidden">
              <img src={aiTool5} alt="Chat Synchronization" className="w-full h-auto" />
            </div>
            <h3 className="text-[20px] font-medium text-[#020617] mb-3">
              Chat Synchronization
            </h3>
            <p className="text-[16px] text-[#292f38]">
              Sync and back up your chat data across multiple devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
