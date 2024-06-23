export const jsonToCsv = (data: any[], fields: string[]) => {
  const csvRows: string[] = [];
  const headers = fields.join(",");
  csvRows.push(headers);

  for (const row of data) {
    const values = fields.map((field) => {
      const escaped = ("" + row[field]).replace(/"/g, '\\"');
      return `"${escaped}"`;
    });
    csvRows.push(values.join(","));
  }

  return csvRows.join("\n");
};