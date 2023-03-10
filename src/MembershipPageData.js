//BASE STRUCTURE OF OBJECT
// const def = {
//     header: "",
//     subheader: "",
//     subheader1: "",
//     subheader2: "",
//     subheader3: "",
//     checkedtextchat: [{head:"",body:""}],
//     search: [{title:"",children: [""]}],
//     checkedtext: []
// }

export const FeaturesData = {
    header: "Features",
    subheader: "NEWS TAB",
    checkedtext: ["It features news managed by the admin of the organization detailing a curated selection of the day’s top stories, urgent information is instantaneous and broadly displayed.","It allows members be part of a larger conversation with all information on one platform. There is control of news dissemination thereby curbing false alarms, and misinformation while also reining extreme views.","Members can read news anytime whenever they wish and able to read information again and again.","Past news can be searched by date.","Users can also like, dislike and comment on various news stories posted by the admin."]
}

export const EventNTraining = {
    header: "EVENT AND TRAINING MANAGEMENT TAB",
    subheader: "This tab showcases all events as it relates to all organization and its members.",
    checkedtext: [
        "An event can be scheduled as recurring or a one-off e.g., meetings.",
        "There is categorization of events based on attendees of the event or the peculiarity of the event.",
        "Some events can be strictly for executives, members, group members, class members, etc.",
        "The categorization is created by the admin to avoid misinformation.",
        "Events can be virtual, hybrid or physical as it allows for members to register and login to the online meeting via its interface with zoom, google team etc.",
        "Members can search for past events by date and type.",
        "Registration for training courses of the organization is captured through the event and training management mobile.",
        "Participants can login via the Rel8 app is training virtual.",
        "Records of participants can be generated by the admin whenever such is required."]
}

export const ChatManagement = {
    header: "CHAT MANAGEMENT",
    subheader: "The chat feature creates an avenue for faster communication and decision making without necessarily waiting to see in person. It creates an avenue for bonding while promoting trust. Communication can in turn fuel productivity among while creating clarity among community members. The chat section is divided into 4 main categories:",
    checkedtextchat: [
        {
            head:"Global chat for members",
            body:"a. This applies to organizations with global or national spread."
        },
        {
            head:"Chapter/State Based Chats",
            body:"a. This applies to organizations with chapters or branches."
        },
        {
            head:"Committee chat",
            body:"a. Different committees will have their committee chat group created with members of such committee as the only active participants. –"
        },
        {
            head:"Executive members chat",
            body:"a. Members of the executive forum are the only ones allowed in this sub categories of chat groups."
        },
        {
            head:"One-on-One chat",
            body:"a. Members can also interact with one another on the platform"
        }
    ]
}

export const ExecutiveCom = {
    header: "EXECUTIVE & COMMITTEE (Exco Activities Management)",
    subheader: "This feature provides the required platform for all exco members to relate without interference of non exco or committee member.",
    subheader1: "The profile of each executive/committee member is attached to their basic information and their roles. ",
    subheader2: "Past executives and their profiles can also be viewed by year or tenure. Toward a greater insight to the workings of this feature, please take note the following: -",
    checkedtext: [
        "Two members cannot hold one position","An executive member can also be a committee member.","An executive position (portfolio) can either be removed or added by the admin only.","The admin uploads minute and reports for executive meetings.","Members can belong to one or more committees.","Duties of each committee member can be added to committee profile."]
}

export const ResourcePub = {
    header: "RESOURCES & PUBLICATIONS",
    checkedtext: ["The minutes of the various meetings can be added to resources page where they can be viewed, same is applicable to communique of meetings.","Minutes are placed in folders where all minutes of meetings can be viewed in line with given specifications, date, purpose etc.","Organizations with communities that have research-based write-up and publications also have the opportunity to upload different publications.","All publications are forwarded to the admin or whoever is assigned by the admin for upload."]
}

export const DuesNOther = {
    header: "DUES & OTHER PAYMENT MANAGEMENT",
    checkedtext: ["List of Financial Members are updated and published automatically every month via the news platform.","List of Non-Financial Members can also be published automatically at selected regular intervals.","This feature applies to organizations that pay dues either weekly, monthly, yearly or quarterly.","The payment of the due can also be set as one off or recurring.","Based on selected options, non-financial Members can be logged out if they are owing the association or Alumni (dues and other mandatory payments) for a selected period, even if they have paid for subscription for the app.","Logged out non-financial member trying to log back in app get a payment request pop up (This must be complied with before getting access and an option for partial payment also exist as well).","Admin is be able to enable the above feature at the set-up stage."]
}

export const Gallery = {
    header: "GALLERY",
    checkedtext: ["The gallery feature allows for the showcasing of various pictures from past events.","Preview videos from the community YouTube channel can also be viewed.","Videos can also be uploaded to the gallery section."]
}

export const MembershipOffer = {
    header: "MEMBERSHIP SEARCH",
    search: [{title:"Member have active status and non-active status which is determined primarily by due payment but solely within the jurisdiction of the admin.",children: ["Members can search for other members using criteria such as;","o Set,","o Name,","o Department,","o Year,","o class","o Other options as provided by admin."]}],
    checkedtext: ["Members can search for; News, Insights, Events via time range, title and other options provided for at the set-up stage."]
}

export const AppSub = {
    header: "APP SUBSCRIPTION MANAGEMENT",
    subheader: "Organization membership dues and other payment can be managed by the app.",
    subheader1: "This is provided for in the members account management area. Members can:",
    subheader3: "The application is a subscription based one and all members are expected to pay a specified fee annually. The subscription payment is divided into two:",
    checkedtext: ["View their payment history","Make payment (based on integration with given receiving account).","Access receipt for payment made.","The account management module can as well be used to grant or deny members access for the use of the app."],
    checkedtextchat: [{head:"Individual Payment:",body:"o Individual members are required to pay a specified amount to gain full access into the use of the software."},{head:"Bulk Subscription:",body:"o The organization purchasing the app pays in full for all members so that all members will not have to pay after joining."}]
}

export const Auth= {
    header: "AUTHENTICATION",
    subheader: "This feature provides for security verification that bars non-members from joining the community.",
    checkedtext: ["Approved users/members will have to input specific details as created by the super admin to validate identity of intending user.","Users can only register if their data matches the data provided in the database submitted by the admin during setup.","There are two levels of database(s), the first database is for all members and the second database is for members who have registered/activated their accounts on the Rel8 app and have been confirmed."]
}


export const Ticket = {
    header: "TICKETS & SUPPORT MANAGEMENT",
    checkedtext: ["This feature serves as a support service for members who encounter issues.","Each issue is treated as a ticket and forwarded to admin who then pushes it to the Rel8 technical team for immediate attention.","Frequently asked questions as well as form to fill out details and complaints to be sent to admin."]
}