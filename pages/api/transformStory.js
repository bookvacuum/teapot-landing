export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { story, tone } = req.body

  if (!story) {
    return res.status(400).json({ message: 'Story is required' })
  }

  try {
    // Replace with your actual AI API endpoint
    // For example, OpenAI, Anthropic, or your custom model
    const response = await fetch('YOUR_AI_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.AI_API_KEY}`,
      },
      body: JSON.stringify({
        prompt: `Transform the following work story into the style of Santa Claus while preserving the sentiment and core message, but making the author's identity untraceable. Change specific details like names, departments, and identifying information while keeping the emotional context intact.\n\nOriginal story: ${story}\n\nTransformed story:`,
        // Add other parameters based on your AI provider
      }),
    })

    const data = await response.json()

    // Adjust based on your AI API response structure
    const transformedStory =
      data.choices?.[0]?.text || data.content || data.output

    res.status(200).json({ transformedStory })
  } catch (error) {
    console.error('Error transforming story:', error)
    res.status(500).json({ message: 'Error transforming story' })
  }
}
