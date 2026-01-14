# Video Testimonials Setup Guide

## How to Add YouTube Videos

### Step 1: Get Your YouTube Video ID

1. **From YouTube URL:**

   - Go to your YouTube video
   - Copy the URL from the address bar
   - Extract the video ID:
     - `https://www.youtube.com/watch?v=VIDEO_ID_HERE` → Use `VIDEO_ID_HERE`
     - `https://youtu.be/VIDEO_ID_HERE` → Use `VIDEO_ID_HERE`

2. **Example:**
   - URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
   - Video ID: `dQw4w9WgXcQ`

### Step 2: Update the Video IDs

Open `src/components/VideoTestimonial.tsx` and replace the placeholder IDs:

```typescript
const videos = [
  {
    id: "YOUR_VIDEO_ID_1", // Replace VIDEO_ID_1 with your actual video ID
    title: "Client Testimonial 1",
  },
  {
    id: "YOUR_VIDEO_ID_2", // Replace VIDEO_ID_2 with your actual video ID
    title: "Client Testimonial 2",
  },
  {
    id: "YOUR_VIDEO_ID_3", // Replace VIDEO_ID_3 with your actual video ID
    title: "Client Testimonial 3",
  },
];
```

### Step 3: Add More Videos (Optional)

To add more videos, simply add more objects to the array:

```typescript
const videos = [
  { id: "VIDEO_ID_1", title: "Client Testimonial 1" },
  { id: "VIDEO_ID_2", title: "Client Testimonial 2" },
  { id: "VIDEO_ID_3", title: "Client Testimonial 3" },
  { id: "VIDEO_ID_4", title: "Client Testimonial 4" }, // Add more here
];
```

## Features

- ✅ **Lazy Loading**: Videos load only when needed
- ✅ **Click to Play**: Click on video thumbnail to play
- ✅ **Responsive**: Works on mobile, tablet, and desktop
- ✅ **Beautiful UI**: Modern design with hover effects
- ✅ **Auto-play**: Videos auto-play when clicked

## Tips

1. **Video Privacy**: Make sure your videos are set to "Public" or "Unlisted" on YouTube
2. **Video Quality**: Use high-quality videos for best results
3. **Video Length**: Keep testimonials concise (1-3 minutes works best)
4. **Thumbnails**: YouTube will automatically use your video thumbnail

## Troubleshooting

- **Video not showing?** Check that the video ID is correct and the video is public/unlisted
- **Video not playing?** Ensure the video allows embedding (check YouTube video settings)
- **Layout issues?** The grid automatically adjusts based on number of videos
