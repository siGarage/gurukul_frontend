// export const MENUITEMS = [
//   {
//     menutitle: "MAIN",
//     Items: [
//       {
//         path: `/dashboard`,
//         icon: "home",
//         type: "link",
//         active: true,
//         title: "Dashboard",
//       },
//     ],
//   },
//   {
//     menutitle: "Pages",
//     Items: [
//       {
//         title: "Users",
//         icon: "user",
//         type: "sub",
//         active: false,
//         children: [
//           {
//             path: `/property-manager`,
//             type: "link",
//             title: "Property Managers",
//           },
//           {
//             path: `/guest`,
//             type: "link",
//             title: "Students",
//           },
//           {
//             path: `editor`,
//             type: "link",
//             title: "Editors",
//           },
//           {
//             path: `/agent`,
//             type: "link",
//             title: "Agent",
//           },
//           {
//             path: `cyber-partner`,
//             type: "link",
//             title: "Cyber Partners",
//           },
//           {
//             path: `caller`,
//             type: "link",
//             title: "Callers",
//           }
//         ],
//       },
//       // {
//       //   title: "College",
//       //   icon: "user",
//       //   type: "sub",
//       //   active: false,
//       //   children: [
//       //     {
//       //       path: `/college-list`,
//       //       type: "link",
//       //       title: "All College",
//       //     },
//       //     {
//       //       path: `/guest`,
//       //       type: "link",
//       //       title: "Add College",
//       //     }
//       //   ],
//       // },

//       {
//         title: "Property",
//         icon: "user",
//         type: "sub",
//         active: false,
//         children: [
//           {
//             path: `/university-property-list`,
//             type: "link",
//             title: "University Properties",
//           },
//           {
//             path: `/property-list`,
//             type: "link",
//             title: "College Properties",
//           },
//           {
//             path: `/property-list`,
//             type: "link",
//             title: "Online Learning",
//           },
//           {
//             path: `/property-list`,
//             type: "link",
//             title: "Eduversity",
//           },
//           {
//             path: `/add-property`,
//             type: "link",
//             title: "Add Property",
//           },

//         ],
//       }
//     ],
//   },
//   {
//     menutitle: "Other Features",
//     Items: [
//       {
//         title: "Status",
//         icon: "user",
//         type: "sub",
//         active: false,
//         children: [
//           {
//             path: `/status`,
//             type: "link",
//             title: "Status",
//           }
//         ],
//       },
//       {
//         title: "Property Type",
//         icon: "user",
//         type: "sub",
//         active: false,
//         children: [
//           {
//             path: `/property-type`,
//             type: "link",
//             title: "Property Type",
//           }
//         ],
//       },
//       {
//         title: "Categories",
//         icon: "user",
//         type: "sub",
//         active: false,
//         children: [
//           {
//             path: `/category-list`,
//             type: "link",
//             title: "Category",
//           }
//         ],
//       }

//     ],
//   },

// ];

export const MENUITEMS = [
  {
    menutitle: "Dashboard",
    Items: [
      {
        title: "Dashboard",
        icon: "user",
        type: "sub",
        active: false,
        children: [
          {
            path: `/dashboard`,
            type: "link",
            title: "Dashboard",
          },
        ],
      },
    ],
  },
  {
    menutitle: "Features",
    Items: [
      {
        title: "Features",
        icon: "user",
        type: "sub",
        active: false,
        children: [
          // {
          //   path: `/category`,
          //   type: "link",
          //   title: "Category",
          // },
          {
            path: `/category-image`,
            type: "link",
            title: "Category Image",
          },
          {
            path: `/user-list`,
            type: "link",
            title: "User",
          },
          // {
          //   path: `/exam`,
          //   type: "link",
          //   title: "Exam",
          // },
        ],
      },
    ],
  },
  // {
  //   menutitle: "Other Features",
  //   Items: [
  //     {
  //       title: "Groups",
  //       icon: "user",
  //       type: "sub",
  //       active: false,
  //       children: [
  //         {
  //           path: `/group-list`,
  //           type: "link",
  //           title: "Groups",
  //         },
  //       ],
  //     },
  //   ],
  // },
];
