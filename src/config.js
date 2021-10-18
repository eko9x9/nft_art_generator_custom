"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "constants/blend_mode.js"));
const description =
  "This is the description of your NFT project";
const baseUri = "ipfs://NewUriToReplace";

const templateTraitOrderName = "Background";
const layerConfigurations = [
  // Dead Ninja ok
  {
    growEditionSizeTo: 35,
    layersOrder: [
      { name: "Background" },
      { name: "Skin Dead" },
      { name: "Head Mask Dead" },
      { name: "Gloves" },
      { name: "Eyes Dead" },
      { name: "Arm Guard Dead" },
      { name: "Skill Dead" },
      { name: "Body Armor Dead" },
    ],
  },
  // White Ninja ok
  {
    growEditionSizeTo: 209,
    layersOrder: [
      { name: "Background" },
      { name: "Skin" },
      { name: "Head Mask White" },
      { name: "Gloves White" },
      { name: "Eyes" },
      { name: "Arm Guard White" },
      { name: "Skill" },
      { name: "Body Armor White" },
    ],
  },
  // Black Ninja
  {
    growEditionSizeTo: 383,
    layersOrder: [
      { name: "Background" },
      { name: "Skin" },
      { name: "Head Mask Black" },
      { name: "Gloves" },
      { name: "Eyes" },
      { name: "Arm Guard Black" },
      { name: "Skill" },
      { name: "Body Armor Black" },
    ],
  },
  // Grey Ninja
  {
    growEditionSizeTo: 557,
    layersOrder: [
      { name: "Background" },
      { name: "Skin" },
      { name: "Head Mask Grey" },
      { name: "Gloves" },
      { name: "Eyes" },
      { name: "Arm Guard Grey" },
      { name: "Skill" },
      { name: "Body Armor Grey" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 1280,
  height: 1280,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: false,
  brightness: "45%",
  static: false,
  default: "#2B2B2B",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  templateTraitOrderName
};
