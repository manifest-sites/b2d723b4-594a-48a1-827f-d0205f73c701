import { useState } from 'react'
import { Card, Button, Row, Col, Typography, Divider, Space, Tag } from 'antd'

const { Title, Paragraph, Text } = Typography

const chickenBreeds = [
  {
    name: "Rhode Island Red",
    description: "Hardy, dual-purpose breed known for excellent egg laying",
    eggColor: "Brown",
    temperament: "Docile"
  },
  {
    name: "Leghorn",
    description: "Excellent white egg layers, active and independent",
    eggColor: "White", 
    temperament: "Active"
  },
  {
    name: "Buff Orpington",
    description: "Large, fluffy birds that are great for families",
    eggColor: "Light Brown",
    temperament: "Gentle"
  },
  {
    name: "Sussex",
    description: "Curious and friendly breed that comes in many colors",
    eggColor: "Cream",
    temperament: "Friendly"
  }
]

const chickenFacts = [
  "Chickens can live 8-10 years on average",
  "A hen can lay over 300 eggs per year",
  "Chickens have excellent memories and can recognize over 100 faces",
  "Chickens communicate with over 30 different vocalizations",
  "Baby chicks can learn their names within weeks",
  "Chickens are descendants of wild jungle fowl",
  "Chickens can see UV light and have better color vision than humans"
]

const careTips = [
  "Provide 4 square feet per bird in the coop",
  "Ensure fresh water is always available", 
  "Feed layer pellets for good egg production",
  "Collect eggs daily to keep them fresh",
  "Keep the coop clean and well-ventilated",
  "Let chickens free-range when possible for exercise"
]

function ChickenApp() {
  const [currentFact, setCurrentFact] = useState(chickenFacts[0])

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * chickenFacts.length)
    setCurrentFact(chickenFacts[randomIndex])
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Title level={1} className="text-orange-600">
            🐔 Chicken Paradise 🐔
          </Title>
          <Paragraph className="text-lg text-gray-600">
            Your complete guide to the wonderful world of chickens
          </Paragraph>
        </div>

        {/* Chicken Breeds Section */}
        <div className="mb-12">
          <Title level={2} className="text-orange-700 mb-6">
            Popular Chicken Breeds
          </Title>
          <Row gutter={[16, 16]}>
            {chickenBreeds.map((breed, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <Card 
                  hoverable
                  className="h-full shadow-md hover:shadow-lg transition-shadow"
                  title={breed.name}
                >
                  <Paragraph className="text-sm mb-3">
                    {breed.description}
                  </Paragraph>
                  <Space direction="vertical" size="small" className="w-full">
                    <div>
                      <Text strong>Egg Color: </Text>
                      <Tag color="gold">{breed.eggColor}</Tag>
                    </div>
                    <div>
                      <Text strong>Temperament: </Text>
                      <Tag color="green">{breed.temperament}</Tag>
                    </div>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <Divider />

        {/* Fun Facts Section */}
        <div className="mb-12">
          <Title level={2} className="text-orange-700 mb-6">
            Fun Chicken Facts
          </Title>
          <Card className="shadow-md">
            <div className="text-center">
              <Paragraph className="text-lg mb-4 min-h-[60px] flex items-center justify-center">
                💡 {currentFact}
              </Paragraph>
              <Button 
                type="primary" 
                size="large"
                onClick={getRandomFact}
                className="bg-orange-500 hover:bg-orange-600 border-orange-500"
              >
                Get Another Fact!
              </Button>
            </div>
          </Card>
        </div>

        <Divider />

        {/* Care Tips Section */}
        <div className="mb-8">
          <Title level={2} className="text-orange-700 mb-6">
            Essential Chicken Care Tips
          </Title>
          <Row gutter={[16, 16]}>
            {careTips.map((tip, index) => (
              <Col xs={24} sm={12} key={index}>
                <Card className="h-full shadow-sm">
                  <div className="flex items-start">
                    <span className="text-orange-500 text-xl mr-3">✓</span>
                    <Paragraph className="mb-0">{tip}</Paragraph>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pb-8">
          <Paragraph className="text-gray-500">
            Happy chicken keeping! 🐓🥚
          </Paragraph>
        </div>
      </div>
    </div>
  )
}

export default ChickenApp