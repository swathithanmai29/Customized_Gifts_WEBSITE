
# Customized Gifts Website

## Overview
This is a front-end website for a customized gifts store that allows users to explore different gift categories, customize products, and place inquiries. The website features a dark mode toggle, an image slideshow, an order popup form, and animated statistics.

## HTML Features ('index.html')

### 1. **Navigation Bar**
The navigation bar provides quick access to different sections of the website:
- Home
- Categories
- Customization
- About
- Contact  
It also includes a **dark mode toggle** button to switch between light and dark themes.

### 2. **Homepage**
- A **welcome message** introduces the store.
- A **slideshow** displays different customized gift items.
- A **call-to-action (CTA) button** labeled "Order Now" opens an inquiry popup.

### 3. **Image Slideshow**
- Uses JavaScript to cycle through images every 3 seconds.
- Displays one image at a time in a smooth transition.

### 4. **Order Inquiry Popup**
- Clicking "Order Now" opens a form popup.
- Users can select a product and provide details.
- Clicking outside the popup or pressing close (`×`) hides the form.

### 5. **Gift Categories**
- Displays different gift categories such as **Personalized Accessories, Photo Gifts, Home & Living, and Tech Accessories**.
- Uses a grid layout for better presentation.

### 6. **Customization Section**
- Users can choose a gift category.
- Enter custom text (e.g., names, messages).
- Select colors with a **live preview**.
- Upload an image for customization.
- Submit the customization request.

### 7. **Animated Statistics**
- Displays live counters for:
  - Number of happy customers.
  - Unique gift designs.
  - Branches worldwide.
- Uses JavaScript to animate the numbers increasing dynamically.

### 8. **About Section**
- Provides information about the business, branches, and services offered.

### 9. **Contact Section**
- Includes a **contact form** with fields for name, email, mobile number, and message.
- A submit button to send inquiries.

## JavaScript Features (`script.js`)
1. **Dark Mode Toggle**
   - Switches between light and dark mode.
   - Updates button text to reflect the current mode.

2. **Image Slideshow**
   - Cycles through images every 3 seconds.

3. **Order Popup**
   - Opens when clicking "Order Now".
   - Closes when clicking outside the popup or on the close button.

4. **Animated Counters**
   - Gradually increases numbers to simulate real-time counting.

5. **Color Selection**
   - Updates the live preview based on user selection.


## Styling (`style.css`)
1. **Dark Mode**
   - Default background is dark (`#121212`).
   - Light mode switches to white.

2. **Navigation Bar**
   - Fixed at the top for easy access.
   - Includes hover effects.

3. **Slideshow**
   - Uses fade-in effects for smooth transitions.

4. **Popup Form**
   - Styled with a semi-transparent background.
   - Closes on clicking outside.

5. **Customization Form**
   - Includes interactive color selection.
   - Responsive for mobile-friendly design.



## How to Use
1. Open `index.html` in a browser.
2. Navigate through sections using the menu.
3. Try enabling dark mode.
4. Explore the gift categories.
5. Click **"Order Now"** to test the popup form.
6. Experiment with the customization options.
7. Submit a contact inquiry.



## Future Enhancements
- **Backend Integration**: Store orders and inquiries in a database.
- **Live Preview Feature**: Show customized product previews before ordering.
- **User Authentication**: Allow users to create accounts and track orders.

