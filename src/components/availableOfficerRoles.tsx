import React, { FC } from "react";
import { getOfficerRoleName, officerRoles } from "../constants/officers";

export const AvailableOfficerRoleDescriptions: FC = () => (
  <div>
    {officerRoles.map((officerRole) => (
      <div key={officerRole.scaName ?? officerRole.mundaneName}>
        <h5>{getOfficerRoleName(officerRole)}</h5>
        <p>
          <span>{officerRole.description}</span>
        </p>
      </div>
    ))}
  </div>
);

export const AvailableOfficerRoles: FC = () => (
  <ul>
    {officerRoles.map((role) => (
      <li key={role.scaName ?? role.mundaneName}>
        <span>{getOfficerRoleName(role)}</span>
      </li>
    ))}
  </ul>
);
