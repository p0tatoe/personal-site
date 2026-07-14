---
layout: ../../layouts/Layout.astro
title: "What Does Big Data Have On Me?"
---
# What Does Big Data Have On Us?

Have you ever gotten an ad that seemed TOO targeted? I recently mentioned to my friend that it would be nice to have a binder to store National Park maps in. A few days later, I got an ad for the exact product I was imagining. It feels like you would have had to be listening in on me to know that... In actuality, these ultra-precise advertisments can find their way to you without bugging your microphone. The ad in my example could have found its target though my National Park related google searches, online payments, locations, or proximity to others with similar interests.

It is pretty safe to assume that any actions or information you input into website or app will be tracked. If companies are going to track people's data, I believe that at a minimum:

1. Tracking should benefit the individuals being tracked.
2. The user should be informed on what is tracked, and have the option to delete their data.

With that in mind, I requested my data from a handful of platforms and reviewed the experience below.

---

## Exporting Data from Facebook

[Official Instructions](https://www.facebook.com/help/212802592074644)  
[Link to request your Facebook data](https://accountscenter.facebook.com/info_and_permissions/dyi)  

**Overall Experience: 4/5**  

The instructions given by Facebook are a bit confusing, since clicking the icon redirects you to facebook.com. You need to either open facebook.com in another tab, or follow the link to the [Accounts Center](https://accountscenter.facebook.com), skipping steps 1 and 2. From the Accounts Center you can also request your data from Instagram and your Meta Account. The Meta account export is not working for me right now, since it seems to be a new thing they are rolling out. The requests typically take a few hours to complete, and an email is sent to the email address your account is linked to. Since my Facebook account is linked to an email I never check, I didn't see the notification. For most users, I would recommend requesting the HTML version of the data dump. Facebook provides a `start_here.html` file that should help you explore your files locally.  

The provided advertising data is particularly interesting. In this regard, Facebook provides the most informative report out of all the major platforms. This information is stored in the `ads_information` folder. Within this folder, the `advertisers_using_your_activity_or_information` file was particularly interesting. The `ad_preferences` file is also worth a look, since you can see what Facebook thinks your ad interests are. I found these interests to be somewhat inaccurate, which is either a good thing or a bad thing. I plan to dive more into this in a separate post.

---

## Exporting Data from Google

[Official Instructions](https://support.google.com/accounts/answer/3024190)  
[Link to request your Google data (Google Takeout)](https://takeout.google.com/)  
[Link to Google Ads Center](https://myadcenter.google.com/home)  

**Overall Experience: 3/5**  

Google allows you to export almost all the information associated with your Google account through Google Takeout. From there you can select the google services you are interested in extracting your data from. Some good ones to start with are **Google Account**, **My Activity**, and **Profile**. For ad-related data, request `My Activity` and look inside the `Ads` folder. You will see a file called `MyActivity`. This file seems to have a list of websites you visited that display Google Ads. I am not quite sure what the rules are here for which websites end up in the `MyActivity` file.

From an advertising data perspective, the requestable information from Google Takeout was not as informative as the Facebook data. Another place where you can view your Google Ads-related data is on Google's My Ads Center. This site has information that is on par with Facebook's ads_information folder, i.e. interests, advertisers, and ads. The problem with this site is that you can't easily export the data. My Ads Center's chosen naming conventions are also confusing. Like what does "Your recent ad brands" mean? Is it a list of advertisers who's ads I have seen? Is it a estimate of advertisers who would be interested? On the other hand Google seems to be better than Facebook in allowing the user to delete their data and requesting the platform to stop tracking their data.  

---

## Exporting Data from Microsoft

[Link to Microsoft Privacy Dashboard](https://account.microsoft.com/account/privacy)  

**Overall Experience: 2/5**  

Microsoft allows you to view and download your data through their **Privacy Dashboard**. After viewing this I realized that the search function on my taskbar is connected to Bing, and of course, tracked. Ever since they introduced the feature, I have been irritated by Bing intermittently loading up a websearch of the application I am trying to open, rather than just showing me the file or folder I am looking for. It was interesting to see a big list of everything I've searched in that search bar. As of June 2026, I believe that Microsoft is rolling out the option to turn off that feature. Additionally, they had a list of every application I run each day. You can delete the list from the Privacy Dashboard, but there doesn't seem to be a way to opt out of this data collection. There is also no way to export the whole of the data as a zip file on the website. 

---

## Exporting Data from LinkedIn

[Official Instructions](https://www.linkedin.com/help/linkedin/answer/a1339364/downloading-your-account-data)  
[Link to request your LinkedIn data](https://www.linkedin.com/mypreferences/d/download-my-data)  

**Overall Experience: 4/5**  

The LinkedIn data export process comes in two installments. They got the first installment of data sent to my email within an hour, and sent the full export after a day. Since it was an email from LinkedIn, it was filed under social emails in my inbox. One nitpick issue was that the zip folder they gave me ended in .zip.zip. Unzipping the folder returns an unzipped folder with a name that ends in .zip. I was silghtly surpised to see a list of every job I have applied to on the LinkedIn platform inside the Job Applications.csv file. It is important to note that this did not include the jobs where I went to the company's own job application page to apply, it was only LinkedIn Easy Apply, and such things where you apply on linkedin.com. I was happy to see they included Ad Targeting.csv and Ads Clicked.csv. My targeted Ad profile was a step up in accuracy from that of Google or Facebook, but it was focused within the job-related interests domain. Within Ads Clicked.csv, you get a list of the IDs of the ads that you have clicked and the date you clicked them. To make sense of this list, you are going to have to navigate to LinkedIn's [Ad Library](https://www.linkedin.com/ad-library/). If you visit this site, notice how there is no option to search by ad ID. To search by ad ID, you can manually edit the URL like so: https://www.linkedin.com/ad-library/detail/<your id here>.

---

## Exporting Data from Acxiom

**Overall Experience: 1/5**  

Out of these major platforms I have reviewed, it feels like Acxiom has the most data about me, while providing me the least benefit. Facebook tracks me because I use their services. With Acxiom, I never made an account, or signed a terms and conditions, and yet they have a ton of data on me. I haven't actually received my data yet, but from the verification process alone, I can tell they have a lot of data on me. The verification process required a lot of private information from my end. Their data request website crashes 50% of the time I try to open it. They make you wait up to 45 days to get your data. I will update this section when I receive my data.

---

## Takeaways

I am fairly certain that most people do not understand the extent to which companies track their data. I went in expecting these platforms to track everything, and even then, in each of my platform reviews, I was surprised by something I saw. In addition to what information Big Data tracks, it was also interesting to see how long they held the data for. The time span varied across platforms, services, and metrics, but it was not uncommon to see data from years ago still being stored. 

While requesting my data, I also came across various ways to opt out of data tracking. I clicked around some of these options, but it felt like I was wasting my time. Opt out was only available for certain features, and the toggles were often scattered around different parts of the page and hidden behind various click-thru menus. I think it would be nice to have a one-click opt out of all optional tracking, which I did not see in my reviews[^1]. Even better would be opt-in instead of opt-out, but for reasons, I don't think companies would be too eager to do that. 


[^1]: I have not tried to delete my data from Acxiom yet, but from what I understand, the process would be a single request form.
