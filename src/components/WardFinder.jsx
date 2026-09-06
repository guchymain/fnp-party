import { useMemo, useState } from "react";
import { MapPin } from "lucide-react";
import { statesLgas } from "../data/statesLgas.js";
import { SelectField } from "./FormField.jsx";

export default function WardFinder({ onSelect }) {
  const [state, setState] = useState("");
  const [lga, setLga] = useState("");
  const [ward, setWard] = useState("");

  const lgas = useMemo(
    () => statesLgas.find((s) => s.state === state)?.lgas ?? [],
    [state]
  );
  const wards = useMemo(
    () => lgas.find((l) => l.name === lga)?.wards ?? [],
    [lgas, lga]
  );

  function handleStateChange(value) {
    setState(value);
    setLga("");
    setWard("");
  }

  function handleLgaChange(value) {
    setLga(value);
    setWard("");
  }

  function handleWardChange(value) {
    setWard(value);
    if (value) onSelect?.({ state, lga, ward: value });
  }

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <SelectField
        id="finder-state"
        label="State"
        placeholder="Select state"
        options={statesLgas.map((s) => s.state)}
        value={state}
        onChange={(e) => handleStateChange(e.target.value)}
      />
      <SelectField
        id="finder-lga"
        label="LGA"
        placeholder={state ? "Select LGA" : "Select a state first"}
        options={lgas.map((l) => l.name)}
        value={lga}
        onChange={(e) => handleLgaChange(e.target.value)}
        disabled={!state}
      />
      <SelectField
        id="finder-ward"
        label="Ward"
        placeholder={lga ? "Select ward" : "Select an LGA first"}
        options={wards}
        value={ward}
        onChange={(e) => handleWardChange(e.target.value)}
        disabled={!lga}
      />
      {ward && (
        <div className="sm:col-span-3 flex items-start gap-3 rounded-xl bg-brand-50 p-4 text-sm text-brand-700">
          <MapPin size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
          <p>
            Your ward chapter contact: <strong>{ward} Coordinator</strong>, {lga} LGA, {state} State.
            Reach them via the party secretariat at <a className="underline" href="mailto:wards@forwardnigeriaparty.ng">wards@forwardnigeriaparty.ng</a>.
          </p>
        </div>
      )}
    </div>
  );
}
