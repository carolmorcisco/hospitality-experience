# Hospitality Experience Journey

## Objective

Demonstrate how a Webex AI Concierge orchestrates multiple AI agents to create a connected guest journey across voice, RoomOS and WhatsApp.

---

# Experience

## Step 1

Hospitality selected

Desk Pro displays:

Welcome to Aurora Resort

Try saying:

"My name is Alex Morgan."

---

## Event

profile.authenticated

---

## Result

Profile card

Welcome back Alex Morgan

Returning guest

Vegetarian

Outdoor activities

Dining becomes available.

---

## Step 2

User says:

"Book dinner for Saturday night."

---

## Event

dining.confirmed

---

## Result

Dining

Ocean Terrace

Saturday

7:30 PM

Reservation confirmed.

Activities becomes available.

---

## Step 3

User says:

"Find an activity for Saturday afternoon."

---

## Event

activities.recommended

---

## Result

Activities

Sunset Kayaking

Saturday

4:00 PM

AI Concierge sends the waiver to WhatsApp.

Activities card changes to:

Waiver sent to your phone.

Please review it and tell me when you're ready.

---

## Step 4

User reads the waiver on WhatsApp.

User says:

"I've read it."

AI Concierge asks:

"Do you understand and accept the waiver?"

User says:

"Yes."

---

## Event

activities.waiver.accepted

---

## Result

Activities

Waiver accepted

Reservation confirmed

Digital pass ready.

Transportation becomes available.

---

## Step 5

User says:

"Arrange transportation."

---

## Event

transportation.confirmed

---

## Result

Transportation

Electric Shuttle

Lobby Pickup

3:30 PM

Weekend planning completed.

---

## Final Mobile Summary

Webex Connect sends:

Dining confirmation

Activity confirmation

Transportation confirmation

Reminder that the waiver was reviewed and accepted during the AI Concierge conversation.