import { createContext, useCallback, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.js";
import { generateMembershipNumber } from "../utils/formatters.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [member, setMember] = useLocalStorage("fnp_member", null);

  const registerMember = useCallback(
    (data) => {
      const newMember = {
        ...data,
        membershipNumber: generateMembershipNumber(data.state),
        joinedOn: new Date().toISOString(),
        rsvps: [],
        volunteering: [],
        donations: [],
        volunteerHours: 0,
      };
      setMember(newMember);
      return newMember;
    },
    [setMember]
  );

  const loginWithEmail = useCallback(
    (email) => {
      if (member && member.email?.toLowerCase() === email.toLowerCase()) {
        return member;
      }
      return null;
    },
    [member]
  );

  const logout = useCallback(() => setMember(null), [setMember]);

  const addRsvp = useCallback(
    (eventSlug) => {
      setMember((prev) =>
        prev && !prev.rsvps.includes(eventSlug)
          ? { ...prev, rsvps: [...prev.rsvps, eventSlug] }
          : prev
      );
    },
    [setMember]
  );

  const addVolunteerSignup = useCallback(
    (entry) => {
      setMember((prev) =>
        prev
          ? { ...prev, volunteering: [...prev.volunteering, entry], volunteerHours: prev.volunteerHours + 2 }
          : prev
      );
    },
    [setMember]
  );

  const addDonationRecord = useCallback(
    (entry) => {
      setMember((prev) =>
        prev ? { ...prev, donations: [...prev.donations, entry] } : prev
      );
    },
    [setMember]
  );

  const value = {
    member,
    isAuthenticated: Boolean(member),
    registerMember,
    loginWithEmail,
    logout,
    addRsvp,
    addVolunteerSignup,
    addDonationRecord,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
