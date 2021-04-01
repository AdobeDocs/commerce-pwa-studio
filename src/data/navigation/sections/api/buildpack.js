module.exports = {
  title: "Buildpack",
  path: "/api/buildpack/",
  pages: [
    {
      title: "Overview",
      path: "/api/buildpack/",
    },
    {
      title: "BuildBus",
      path: "/api/buildpack/buildbus/",
    },
    {
      title: "Command Line Interface",
      path: "/api/buildpack/cli/",
      pages: [
        {
          title: "Create project",
          path: "/api/buildpack/cli/create-project/",
        },
        {
          title: "Create environement file",
          path: "/api/buildpack/cli/create-environment-file/",
        },
        {
          title: "Load environment file",
          path: "/api/buildpack/cli/load-environment-file/",
        },
        {
          title: "Create custom origin",
          path: "/api/buildpack/cli/create-custom-origin/",
        },
      ],
    },
    {
      title: "Environment configuration",
      path: "/api/buildpack/environment/",
      pages: [
        {
          title: "Environment variables",
          path: "/api/buildpack/environment/variables",
        },
      ],
    },
    {
      title: "Targets",
      path: "/api/buildpack/targets/",
    },
    {
      title: "Targetables",
      path: "/api/buildpack/targetables/",
      pages: [
        {
          title: "Overview",
          path: "/api/buildpack/targetables/",
        },
        {
          title: "TargetableModule",
          path: "/api/buildpack/targetables/TargetableModule/",
        },
        {
          title: "TargetableESModule",
          path: "/api/buildpack/targetables/TargetableESModule/",
        },
        {
          title: "TargetableESModuleArray",
          path: "/api/buildpack/targetables/TargetableESModuleArray/",
        },
        {
          title: "TargetableESModuleObject",
          path: "/api/buildpack/targetables/TargetableESModuleObject/",
        },
        {
          title: "TargetableReactComponent",
          path: "/api/buildpack/targetables/TargetableReactComponent/",
        },
        {
          title: "TargetableSet",
          path: "/api/buildpack/targetables/TargetableSet/",
        },
        {
          title: "SingleImportStatement",
          path: "/api/buildpack/targetables/SingleImportStatement/",
        },
      ],
    },
    {
      title: "Webpack tools",
      path: "/api/buildpack/webpack/",
    },
  ],
};
