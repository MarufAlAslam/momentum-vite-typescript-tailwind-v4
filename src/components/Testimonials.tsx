import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Marquee } from './ui/marquee'

const testimonials = [
  {
    rating: 4.5,
    feedback: "Momentum has become my go-to tool for instant research and idea generation. It's like having a knowledgeable friend always ready to lend a hand!",
    author: {
      name: "John Watson",
      designation: "Freelance Writer",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    }
  },
  {
    rating: 4.5,
    feedback: "Finding inspiration for my designs used to be a challenge, but Momentum has completely transformed my creative process. It's like having a virtual brainstorming partner!",
    author: {
      name: "Emily Saunders",
      designation: "Graphic Designer",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg"
    }
  },
  {
    rating: 4.5,
    feedback: "Document chat on Momentum has streamlined our legal team's communication process. We can quickly discuss case details and share insights, improving our efficiency.",
    author: {
      name: "John Watson",
      designation: "Freelance Writer",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg"
    }
  },
  {
    rating: 4.5,
    feedback: "The instant answers feature has been a lifesaver when I encounter coding challenges. It provides quick solutions and helpful explanations, making my work much smoother.",
    author: {
      name: "Daniel Harris",
      designation: "Software Developer",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg"
    }
  },
  {
    rating: 4.5,
    feedback: "I rely on Momentum for in-depth research assistance. Its ability to analyze complex documents and provide relevant insights has been invaluable to my work.",
    author: {
      name: "Alex Bennett",
      designation: "Legal Professional",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg"
    }
  },
  {
    rating: 4.5,
    feedback: "Momentum has enhanced my classroom experience by providing instant answers. It's like having a virtual assistant to support my teaching.",
    author: {
      name: "Linda Rodriguez",
      designation: "Teacher",
      avatar: "https://randomuser.me/api/portraits/women/6.jpg"
    }
  },
  {
    rating: 4.5,
    feedback: "With Momentum, I never run out of content ideas. It's like having a creative companion who's always ready to brainstorm new topics and angles. Honestly, it's super powerful tool.",
    author: {
      name: "Jennifer Parker",
      designation: "Content Creator",
      avatar: "https://randomuser.me/api/portraits/women/7.jpg"
    }
  },
  {
    rating: 4.5,
    feedback: "Momentum has been a game-changer for our marketing campaigns. It provides fresh perspectives and innovative ideas that have significantly boosted our creativity.",
    author: {
      name: "David Kim",
      designation: "Marketing Manager",
      avatar: "https://randomuser.me/api/portraits/men/8.jpg"
    }
  },
  {
    rating: 4.5,
    feedback: "Communication with my team has never been easier thanks to Momentum's document chat feature. It's revolutionized how we collaborate on projects.",
    author: {
      name: "Michael Lee",
      designation: "Business Owner",
      avatar: "https://randomuser.me/api/portraits/men/9.jpg"
    }
  }
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1 mb-4">
      {[...Array(5)].map((_, index) => {
        const isFilled = index < Math.floor(rating)
        const isHalf = index === Math.floor(rating) && rating % 1 !== 0

        return (
          <div key={index} className="relative">
            <Star
              className={`w-4 h-4 ${isFilled ? 'fill-[#fb923c] text-[#fb923c]' : 'text-gray-300'}`}
            />
            {isHalf && (
              <div className="absolute inset-0 overflow-hidden w-1/2">
                <Star className="w-4 h-4 fill-[#fb923c] text-[#fb923c]" />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

const Testimonials = () => {
  // Split testimonials into two rows for marquee
  const firstRow = testimonials.slice(0, 5)
  const secondRow = testimonials.slice(5, 9)

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="md:px-12 px-0 max-w-[1400px] mx-auto">
        {/* Static Grid for desktop */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-[#e2e8f0] rounded-2xl p-6 shadow-sm"
            >
              {/* Star Rating */}
              <StarRating rating={testimonial.rating} />

              {/* Feedback */}
              <p className="text-[16px] text-[#020617] font-normal mb-6 leading-relaxed">
                {testimonial.feedback}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.author.avatar}
                  alt={testimonial.author.name}
                  className="w-[54px] h-[54px] rounded-full object-cover"
                />
                <div>
                  <p className="text-[16px] text-[#020617] font-normal">
                    {testimonial.author.name}
                  </p>
                  <p className="text-[16px] text-[#475569] font-normal">
                    {testimonial.author.designation}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee for mobile/tablet (magicui Marquee) */}
        <div className="lg:hidden">
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden space-y-6">
            <div className="w-full">
              <Marquee pauseOnHover className="[--duration:7.5s]">
                {firstRow.map((t, i) => (
                  <ReviewCard
                    key={t.author.name + String(i)}
                    img={t.author.avatar}
                    name={t.author.name}
                    username={t.author.designation}
                    body={t.feedback}
                  />
                ))}
              </Marquee>
            </div>

            <div className="w-full">
              <Marquee reverse pauseOnHover className="[--duration:6.25s]">
                {secondRow.map((t, i) => (
                  <ReviewCard
                    key={t.author.name + String(i)}
                    img={t.author.avatar}
                    name={t.author.name}
                    username={t.author.designation}
                    body={t.feedback}
                  />
                ))}
              </Marquee>
            </div>

            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r h-full top-0 m-0"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l h-full top-0 m-0"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
