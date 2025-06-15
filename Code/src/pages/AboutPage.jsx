import React from 'react';
import { motion } from 'framer-motion';

function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-sm bg-primary text-white">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About MySmartKit
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Empowering emotional growth and psychological well-being through 
              evidence-based resources and compassionate guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-light mb-6">
                At MySmartKit, we believe that emotional intelligence and psychological 
                well-being are fundamental to living a fulfilling life. Our mission is 
                to provide accessible, evidence-based resources that support individuals 
                across all stages of development.
              </p>
              <p className="text-lg text-gray-light mb-6">
                From early childhood through adulthood, we offer carefully curated tools 
                and activities grounded in Applied Behavior Analysis (ABA), Cognitive 
                Behavioral Therapy (CBT), and Positive Psychology principles.
              </p>
              <p className="text-lg text-gray-light">
                Our comprehensive approach ensures that everyone—children, teens, adults, 
                parents, educators, and therapists—has access to the resources they need 
                to thrive emotionally and psychologically.
              </p>
            </motion.div>
            
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-full max-w-md">
                <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-8 text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-3xl font-bold">5</div>
                      <div className="text-sm opacity-90">Age Groups Covered</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">20+</div>
                      <div className="text-sm opacity-90">Educational Resources</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">3</div>
                      <div className="text-sm opacity-90">Evidence-Based Approaches</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section bg-bg">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Evidence-Based Approach
            </h2>
            <p className="text-xl text-gray-light max-w-3xl mx-auto">
              We integrate proven methodologies to create comprehensive, effective resources
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Applied Behavior Analysis (ABA)",
                description: "Systematic approach to understanding and changing behavior through evidence-based techniques, particularly effective for early childhood development.",
                icon: "🧠"
              },
              {
                title: "Cognitive Behavioral Therapy (CBT)",
                description: "Proven therapeutic approach that helps individuals identify and change negative thought patterns and behaviors, promoting mental wellness.",
                icon: "💭"
              },
              {
                title: "Positive Psychology",
                description: "Focus on strengths, resilience, and well-being to help individuals flourish and reach their full potential across all life stages.",
                icon: "✨"
              }
            ].map((approach, index) => (
              <motion.div
                key={approach.title}
                className="card text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card-body">
                  <div className="text-4xl mb-4">{approach.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{approach.title}</h3>
                  <p className="text-gray-light">{approach.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-light max-w-3xl mx-auto">
              These principles guide everything we do and create
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Accessibility",
                description: "Making psychological well-being resources available to everyone, regardless of background or circumstances."
              },
              {
                title: "Evidence-Based",
                description: "All our resources are grounded in scientific research and proven therapeutic methodologies."
              },
              {
                title: "Compassion",
                description: "We approach every individual's journey with empathy, understanding, and non-judgmental support."
              },
              {
                title: "Growth",
                description: "We believe in the potential for positive change and development at every stage of life."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                <p className="text-gray-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Explore our comprehensive collection of resources designed to support 
              emotional growth and psychological well-being at every stage of life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#groups" className="btn btn-secondary">
                Explore Book Collections
              </a>
              <a href="/contact" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary">
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;