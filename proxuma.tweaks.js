
// Proxuma Shield Logic v1.1
function applyShieldLogic(result) {
  try {
    if (!result) return result;
    result.findings = result.findings || [];

    if (result.level === "UNKNOWN") {
      result.level = "HIGH";
      result.findings.push({
        level: "WARNING",
        msg: "Hidden or restricted destination. Treat as potential risk."
      });
    }

    if (result.findings.some(f => (f.msg || "").toLowerCase().includes("redirect"))) {
      if (result.level === "LOW") result.level = "MEDIUM";
    }

    result.recommendation = "Avoid opening unless fully trusted.";
    return result;
  } catch(e) {
    return result;
  }
}
