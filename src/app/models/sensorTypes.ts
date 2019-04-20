/**
 * @file Shared sensor 'types' file to help prevent circular references.
 */

// NodeJS modules

// Our modules

// Third party modules

export enum SensorSpecificTypes {
  tower = 'tower',
  fiveInOne38 = '5N1x38',
  fiveInOne31 = '5N1x31',
  proIn = 'ProIn',
  unknown = 'unknown'
}

export enum SensorGeneralTypes {
  tower = 'tower',
  fiveInOne = 'fiveInOne',
  proIn = 'ProIn',
  unknown = 'unknown'
}

/**
 * Converts a string to a SensorSpecificType.
 *
 * @param typeString - String to convert
 * @returns - Returns a SensorSpecificType
 */
export function getSpecificTypeFromString(typeString: string): SensorSpecificTypes {
  let typedString: keyof typeof SensorSpecificTypes;
  typedString = typeString as keyof typeof  SensorSpecificTypes;
  return SensorSpecificTypes[typedString];
}

/**
 * Converts a 'specific' type to a 'general' type.
 * @param specificType - Sensor type to convert
 * @returns Returns the 'general' sensor type.
 */
export function convertSpecificToGeneralType(specificType: SensorSpecificTypes): SensorGeneralTypes {
  switch (specificType) {
    case SensorSpecificTypes.fiveInOne31:
    case SensorSpecificTypes.fiveInOne38:
      return SensorGeneralTypes.fiveInOne;
    case SensorSpecificTypes.tower:
      return SensorGeneralTypes.tower;
    case SensorSpecificTypes.proIn:
      return SensorGeneralTypes.proIn;
    case SensorSpecificTypes.unknown:
    default:
      return SensorGeneralTypes.unknown;
  }
}
