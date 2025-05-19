import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { blogs_1, blogs_2, blogs_3, blogs_4, blogs_5, blogs_6, blogs_7, book1, book2, home_1_13, home_1_14, reviews_m1, reviews_m2, reviews_m3, reviews_m4, reviews_w1, reviews_w2, reviews_w3 } from "../assets";

export const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Books",
    href: "/books",
  },
  {
    name: "Cards",
    href: "/cards",
  },
  {
    name: "Author",
    href: "/author",
  },
  {
    name: "Blogs",
    href: "/blogs",
  }
]

export const socials = [
  {
    name: "Youtube",
    icon: FaYoutube,
    href: "https://www.youtube.com/@AprilPHernandez",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/AprilP.hernandez",
  },
  {
    name: "Tiktok",
    icon: FaTiktok,
    href: "https://www.tiktok.com/@aprilp.hernandez",
  },
]

export const books = [
  {
    id: 'book-001',
    title: 'My Heart Expansion',
    img: book1,
    price: 14.99,
    amzLink: '#',
    imgRight: false,
    text: [
      `Step into the world of My Heart Expansion, a heartfelt collection that explores the depths of love, longing, and the connections that bring us together. Through honest prose and touching reflections, each page opens up like a gentle conversation with the soul, inviting you to experience the raw emotions that come with loving deeply and healing from heartache. Whether it’s the ache of separation or the joy of newfound love, this book is a reminder that the heart’s ability to feel is endless.`,
      `<em><b>Feel the heartbeat of every emotion, where every page tells a story of love and healing.</b></em>`,
      `Written with authenticity and grace, My Heart Expansion is more than just words on a page—it’s a journey that speaks to anyone who has ever loved, lost, and found themselves in the process. Let its verses guide you through moments of vulnerability and strength, offering comfort and inspiration with every turn.`
    ],
  },
  {
    id: 'book-002',
    title: 'Healing and Feeling',
    img: book2,
    price: 14.99,
    amzLink: '#',
    imgRight: true,
    text: [
      `Healing and Feeling is your personal guide to exploring the depths of self-healing and spiritual growth. This powerful workbook is designed to help you face hidden wounds, connect with your inner child, and release the energetic blocks that keep you from true peace and happiness. Through practical exercises, reflective journaling, and spiritual teachings, you’ll learn to reframe negative thoughts, understand your shadow self, and discover the healing power of self-compassion. Whether you’re seeking emotional clarity, spiritual growth, or a deeper connection to your true self, this book is your companion on the journey to wholeness.`,
      `<em><b>“Uncover your shadows, heal your soul, and find the light within.”</b></em>`,
      `Thoughtfully written with empathy and spiritual insight, Healing and Feeling is more than just a workbook—it’s a healing experience. Explore transformative chapters on vulnerability, forgiveness, chakra balancing, and reclaiming your power. Begin your journey to self-discovery and let the light of healing guide your path forward.`
    ],
  },
]

export const reviews = [
  {
    author: "Sophia Mary — Writer",
    avatar: reviews_w1,
    rating: 5,
    text: "April’s words cracked me open and stitched me back together. Her poetry didn’t just speak to my heart it “became” my heart.Every page felt like a sacred echo of my own healing journey.If you’ve ever loved, lost, or longed for rebirth, this book is your compass."
  },
  {
    author: "Lura Jenner — Yoga Teacher",
    avatar: reviews_w2,
    rating: 5,
    text: " brought this book to a meditation retreat, and it became my guide. Storytelling mirrors the quiet power of sitting with yourself unflinching, tender, and utterly transformative.By the last page, I felt like I’d both mourned and celebrated every love I’ve ever known."
  },
  {
    author: "Jack Mile — Therapist",
    avatar: reviews_m1,
    rating: 5,
    text: "Raw, real, and radiant. My Heart Expansions was the sound bath my spirit needed. Verses vibrated through me, loosening old grief and leaving clarity in its wake.I finished it in one sitting—then immediately reread it, lighter every time."
  },
  {
    author: "Nike Steve — Student",
    avatar: reviews_m2,
    rating: 5,
    text: "April doesn’t just write about healing; she “conducts” it. Her words are a retreat between covers.I’d finish a poem and catch myself breathing deeper, shoulders softer.This isn’t a book it’s medicine for the love- wounded.Highly recommended!!"
  },
  {
    author: "Marcus Ron",
    avatar: reviews_m3,
    rating: 5,
    text: "I’ve done therapy for years, but Healing and Feeling reached places talk therapy couldn’t. The inner child meditations had me in tears(the good, releasing kind).By the end, I felt lighter, like I’d finally put down baggage I didn’t realize I was carrying."
  },
  {
    img: home_1_14,
    path: "",
    video: true
  },
  {
    img: home_1_13,
    path: "",
    video: true
  },
  {
    author: "Stepheny Kevin — Energy worker",
    avatar: reviews_w3,
    rating: 5,
    text: "As someone who thinks their way through everything, this book brought me back into my body and soul.The chakra exercises melted away tension I’d held for decades.I’m on my third round of journaling through it!"
  },
  {
    author: "Tyler — Healing coach",
    avatar: reviews_m4,
    rating: 5,
    text: "Thank you! April’s words feel like a wise friend handing you a flashlight for your darkest corners.The forgiveness practices freed me from resentment I’d clung to for years.My relationships with myself and others—have transformed because of this work."
  }
];

export const posts = [
  {
    title: "The Heart Doesn’t Heal on Schedule—And That’s Okay",
    link: "/blogs/the-heart-doesnt-heal-on-schedule-and-thats-okay",
    date: "May 22, 2025",
    img: blogs_4,
    categories: "Therapy",
    caption: "Healing doesn't follow your calendar. It follows your courage.",
    text: [
      "When April left a relationship after years of emotional weight, she didn’t wake up feeling instantly lighter. She didn’t magically become her “best self” overnight. She felt empty, confused—and strangely free.",
      "Healing, she learned, doesn’t happen on a predictable schedule. You don’t mark a date on your calendar and declare yourself whole.",
      "She started writing to reconnect with herself—soft poems that held old memories, whispers of self-worth, and quiet grief. Each line released what her body had held for too long.",
      "What helped her most was letting go of the rush. She stopped asking, “When will I be over this?” and started asking, “What do I still need to feel?”",
      "Healing showed up in messy tears and gentle progress. In silent mornings spent journaling. In moments where she wanted to reach out to the past—and chose not to.",
      "April teaches that slow healing is still healing. You’re not late. You’re just learning how to be whole again, in your own time."
    ]
  },
  {
    title: "Healing Beyond Talk: Why Energy Work Matters",
    link: "/blogs/healing-beyond-talk",
    date: "April 8, 2025",
    img: blogs_1,
    categories: "Spirit",
    caption: "True healing weaves both the mind and the spirit together.",
    text: [
      "For years, traditional therapy has offered a powerful way for people to explore emotions, heal past wounds, and move toward self-growth. But what happens when talk therapy alone isn’t enough? This was the question April faced on her own healing journey—and it led her to something transformative: the integration of energy work and spiritual healing.",
      "When we experience emotional pain, trauma, or loss, the hurt doesn’t just live in our minds; it embeds itself into our bodies and energy fields too. Talk therapy helps us understand and process these emotions, but energy healing—like Reiki, sound healing, and crystal work—can address the layers we can’t always put into words.",
      "April realized that true healing required her to seek out therapists who not only understood emotional wellness but also the complexities of the spiritual world. Spiritually gifted individuals often find themselves misdiagnosed or misunderstood in traditional settings. By blending therapy with energetic practices, April found a way to heal from the inside out.",
      "Through Reiki, she tapped into the universal life force that moves through all of us, clearing blocks and restoring balance. Through mediumship, she connected with guidance beyond the physical plane, finding insights that traditional therapy could never have offered.",
      "Healing is messy, layered, and sometimes invisible—but that doesn’t make it any less real. True healing, April discovered, is about addressing both the seen and unseen parts of ourselves. And that’s what she brings into her sessions: a full-spectrum, compassionate approach to healing the heart, mind, and soul.",
      "If you’ve ever felt like “just talking” wasn’t enough, you’re not alone. Healing isn’t one-size-fits-all. It’s layered, deep, and often profoundly spiritual. You deserve support that sees every part of you."
    ]
  },
  {
    title: "Why Closure Isn’t Always the End",
    link: "/blogs/why-closure-isnt-always-the-end",
    date: "May 13, 2025",
    img: blogs_6,
    categories: "Spirit",
    caption: "Closure doesn’t always come in conversation. Sometimes it comes in letting go without an explanation.",
    text: [
      "April thought healing meant having that final talk. That one last apology. That moment of “I understand now.” But life didn’t give her that. Instead, she got silence. Distance. Memories triggered by songs or old neighborhoods.",
      "And it hurt.",
      "But instead of chasing closure, she created her own. She wrote letters she’d never send. She spoke to her therapist. She let herself cry over people who were still alive, still breathing, still unavailable.",
      "One day, she stopped checking her phone for messages that weren’t coming. And it felt like peace. Closure didn’t come from them. It came from her deciding her heart deserved more.",
      "April teaches this: You don’t need someone else to validate your ending. The power to move on lives within you."
    ]
  },
  {
    title: "Why Healing Is Messy—and Why That’s Beautiful",
    link: "/blogs/why-healing-is-messy",
    date: "April 28, 2025",
    img: blogs_3,
    categories: "Healing",
    caption: "From the chaos of healing, we bloom into our light.",
    text: [
      "We often imagine healing as a peaceful, linear path—one filled with yoga poses, meditation, and perfect calm. But the truth, as April’s journey shows, is that healing is often messy. And that’s not just normal—it’s beautiful.",
      "When April started her healing process after a difficult separation, she didn’t find instant clarity or serenity. She found grief, confusion, old wounds resurfacing, and moments of deep questioning. Healing isn’t about fixing yourself—it’s about finding yourself beneath the layers life has piled on you.",
      "Energetic healing showed her that emotions live in the body just as much as they live in the mind. Spiritual work revealed the unseen scars she carried. Both forms of healing taught her patience and self-compassion.",
      "Messy healing looks like crying on the bathroom floor. It looks like writing journal entries filled with anger and confusion. It looks like feeling lost and then, one day, finding your own light again.",
      "When we expect healing to look “perfect,” we set ourselves up for disappointment. But when we honor the mess—the raw, tangled, beautiful reality of becoming whole—we allow true transformation to happen.",
      "April teaches her clients that messy healing is sacred. It’s proof that you’re doing the work. That you’re brave enough to feel what needs feeling, to face what needs facing, and to build a life that feels deeply, authentically yours.",
      "You don’t need to be perfect to heal—you only need to be willing. And that’s more than enough."
    ]
  },
  {
    title: "Healing Isn’t Always Light—Sometimes It’s Shadow Work",
    link: "/blogs/healing-isnt-always-light",
    date: "May 2, 2025",
    img: blogs_7,
    categories: "Healing",
    caption: "The parts you hide might be the keys to your freedom.",
    text: [
      "There was a point in April’s healing journey when love and light just weren’t enough.",
      "She had to face her shadow—the parts of her she had buried. The bitterness. The fear of being abandoned. The guilt of staying too long. Shadow work isn’t pretty. It’s not a quote on Instagram. It’s sitting with the version of yourself you try to ignore.",
      "But when April did that—really sat with the pain, the ego, the patterns—she found truth. She realized she wasn’t broken. She was responding to wounds she hadn’t acknowledged. By facing those shadows, she reclaimed her light.",
      "Healing isn’t just chanting mantras or meditating in stillness. Sometimes, it’s calling yourself out with love. April says the shadow isn’t your enemy—it’s your teacher. And when you embrace it, you become whole."
    ]
  },
  {
    title: "Spiritual Awakening and Mental Health: Finding Balance",
    link: "/blogs/spiritual-awakening-and-mental-health",
    date: "April 18, 2025",
    img: blogs_2,
    categories: "Growth",
    caption: "The soul’s awakening is the heart’s deepest healing.",
    text: [
      "Spiritual awakenings are beautiful, powerful, and transformative—but they can also be deeply confusing and overwhelming, especially when they collide with our mental health. April’s own path showed her just how closely our emotional well-being and spiritual growth are intertwined.",
      "When you awaken spiritually, old patterns, wounds, and suppressed emotions often rise to the surface. It can feel unsettling, like the ground beneath you is shifting. Many people describe feeling anxious, emotional, or even disconnected during their awakening. April learned firsthand that these feelings aren’t signs of failure—they’re signs of deeper healing unfolding.",
      "Without the right guidance, spiritually gifted people can be misdiagnosed. Sometimes what looks like anxiety is actually energetic sensitivity. Sometimes what feels like depression is a soul calling for change. Recognizing the difference matters. That’s why April’s work is unique—she helps people find healing on both the psychological and energetic levels.",
      "Through therapy, April offers grounded support to unpack emotional blocks. Through Reiki, sound healing, and spiritual readings, she helps clear energy fields and restore balance. Together, these approaches honor both the mind and the spirit, creating a complete circle of care.",
      "You don’t have to choose between science and spirituality—you can embrace both. The journey to healing is about becoming whole, not choosing parts of yourself to leave behind.",
      "If you’re experiencing a spiritual awakening and feel overwhelmed, know that what you’re going through is sacred. And with the right support, you’ll not just survive it—you’ll thrive because of it."
    ]
  },
  {
    title: "When Loving Yourself Feels Foreign",
    link: "/blogs/when-loving-yourself-feels-foreign",
    date: "May 9, 2025",
    img: blogs_5,
    categories: "Healing",
    caption: "If you never learned how to be loved gently, loving yourself might feel strange at first.",
    text: [
      "April realized she had been giving away her love too easily—hoping someone would pour it back in. But when they didn’t, she was left running on empty.",
      "That’s when she turned inward. Self-love wasn’t bubble baths and selfies. It was saying no. It was walking away. It was remembering her little girl self—the one who only wanted to feel safe and seen.",
      "She began reparenting that little girl. Whispering words she wished she heard growing up: “You are not too much. You are not too emotional. You are enough.”",
      "At first, it felt awkward. Foreign. Almost fake.",
      "But slowly, the affirmations became familiar. She started taking herself on solo dates. She stopped apologizing for needing space. She set boundaries—not out of anger, but out of self-respect.",
      "April reminds her clients that self-love is not a destination. It’s a practice. And even if it feels weird at first, it’s worth it."
    ]
  }
];


